import LoanCalculator from "@/components/loan-calculator";

const LoanCalculatorPage = () => {
  const selectedCategory = "personal"; // Example value, adjust based on your app's logic

  return (
    <div>
      <LoanCalculator selectedCategory={selectedCategory} />
    </div>
  );
};

export default LoanCalculatorPage;
