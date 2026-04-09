import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Error Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            ⚠️ Something went wrong
          </h1>
          <button
            onClick={() => window.location.href = "/"}
            className="text-white hover:text-red-500 font-semibold ml-8 px-6 py-3 rounded-lg"
          >
            Go Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;