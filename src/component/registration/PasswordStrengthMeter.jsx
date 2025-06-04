export function PasswordStrengthMeter({ strength }) {
  const getStrengthText = () => {
    switch (strength) {
      case 0:
        return "Enter a password";
      case 1:
        return "Very Weak";
      case 2:
        return "Weak";
      case 3:
        return "Moderate";
      case 4:
        return "Strong";
      case 5:
        return "Very Strong";
      default:
        return "";
    }
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-orange-500";
      case 3:
        return "bg-yellow-500";
      case 4:
        return "bg-blue-500";
      case 5:
        return "bg-green-500";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="mt-2 space-y-1">
      <div className="flex h-1 w-full overflow-hidden rounded-full bg-gray-100">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-full w-1/5 transition-colors duration-300
              ${i < strength ? getStrengthColor() : "bg-gray-200"}
              ${i > 0 && "ml-1"}`}
          />
        ))}
      </div>
      <p className="text-xs text-gray-500">{getStrengthText()}</p>
    </div>
  );
}
