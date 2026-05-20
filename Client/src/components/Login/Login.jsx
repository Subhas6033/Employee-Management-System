import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight, X } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Button } from "../index";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/admin-dashboard");
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        children="Sign In"
        className="px-4 py-2.5 text-sm font-medium rounded-[var(--radius-md)]"
      />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white rounded-[var(--radius-xl)] shadow-[var(--shadow-xl)] w-full max-w-md mx-4 overflow-hidden animate-[scale-in_0.3s_ease-out_forwards]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors z-10"
            >
              <X size={16} />
            </button>

            <div className="p-8 pb-6 text-center">
              <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-accent)] flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">T</span>
              </div>
              <h2 className="text-2xl font-bold  text-[var(--color-text-primary)]">
                Welcome Back
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                Sign in to continue to TrackFlow
              </p>
            </div>

            <form onSubmit={handleLogin} className="px-8 pb-8 space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-[var(--color-text-secondary)]">
                  Email
                </label>
                <div className="relative">
                  <Mail
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-light)] transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-[var(--color-text-secondary)]">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-light)] transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-[var(--color-border)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                children={
                  <span className="flex items-center justify-center gap-2">
                    Sign In
                    <ArrowRight size={14} />
                  </span>
                }
                bgColor="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white py-3 rounded-[var(--radius-md)] shadow-[var(--shadow-accent)]"
              />

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[var(--color-border)]" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-[var(--color-text-muted)]">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  children={
                    <span className="flex items-center justify-center gap-2">
                      <FaGoogle size={14} />
                      Google
                    </span>
                  }
                  variant="outline"
                  className="flex-1 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
                />
                <Button
                  type="button"
                  children={
                    <span className="flex items-center justify-center gap-2">
                      <FaGithub size={14} />
                      GitHub
                    </span>
                  }
                  variant="outline"
                  className="flex-1 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
                />
              </div>

              <p className="text-center text-sm text-[var(--color-text-secondary)]">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-[var(--color-accent)] font-medium hover:underline"
                >
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
