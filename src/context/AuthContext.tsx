import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  email: string;
  fullName: string;
  companyName: string;
  orgSize: string;
  grcScope: string[];
  primaryStandard: string;
  maturity: string;
  designation: string;
  industry: string;
  geoFootprint: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: User & { password?: string }) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_SESSION_KEY = "govenics_current_user";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Restore session from localStorage on mount
  useEffect(() => {
    try {
      const storedSession = localStorage.getItem(LOCAL_STORAGE_SESSION_KEY);
      if (storedSession) {
        const parsedUser = JSON.parse(storedSession) as User;
        setUser(parsedUser);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Failed to restore auth session:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Artificial delay to simulate API response
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Define acceptable pre-seeded fallback demo credentials
    const isDefaultAdmin = email.toLowerCase() === "admin" && password === "password";
    const isDefaultDemo = email.toLowerCase() === "demo@govenics.com" && password === "password123";

    if (isDefaultAdmin || isDefaultDemo) {
      const demoUser: User = {
        email: isDefaultAdmin ? "admin@govenics.com" : "demo@govenics.com",
        fullName: isDefaultAdmin ? "Administrator" : "Harikrishnan",
        companyName: "Govenics GRC Ltd",
        orgSize: "100-500",
        grcScope: ["Regulatory Compliance", "Cybersecurity", "ESG & Sustainability"],
        primaryStandard: "ISO 27001",
        maturity: "Partially Managed",
        designation: isDefaultAdmin ? "System Administrator" : "Chief Compliance Officer",
        industry: "Technology & SaaS",
        geoFootprint: "Multi-State Operations"
      };
      setUser(demoUser);
      setIsAuthenticated(true);
      localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, JSON.stringify(demoUser));
      return true;
    }

    return false;
  };

  const register = async (userData: User & { password?: string }): Promise<boolean> => {
    // Artificial delay to simulate API response
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      // Direct in-memory active session instantiation (no local storage database storage or verification checks)
      const { password: _, ...safeUser } = userData;
      setUser(safeUser);
      setIsAuthenticated(true);
      localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, JSON.stringify(safeUser));

      return true;
    } catch (error) {
      console.error("Error during in-memory mock registration:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem(LOCAL_STORAGE_SESSION_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
