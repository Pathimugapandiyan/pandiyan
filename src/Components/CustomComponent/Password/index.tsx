import React, { useState } from "react";
import { Password } from "primereact/password";
import { ProgressBar } from "primereact/progressbar";

const PasswordStrengthMeter: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const strengthPercentage = calculateStrength(newPassword);
    setStrength(strengthPercentage);
  };

  const calculateStrength = (password: string): number => {
    const length = password.length;
    const maxStrength = 100;
    return Math.min((length / 8) * maxStrength, maxStrength);
  };

  return (
    <div className="card p-2">
      <Password
        value={password}
        onChange={handleChange}
        feedback={false}
        placeholder="Enter Password"
      />
      <ProgressBar value={strength} showValue={false} />
    </div>
  );
};

export default PasswordStrengthMeter;
