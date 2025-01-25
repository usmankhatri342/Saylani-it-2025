import Header from "@/components/header";
import Footer from "@/components/footer";
import LoanCategories from "@/components/loan-categories";
import LoanCalculator from "@/components/loan-calculator";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="py-12 text-center bg-gray-400">
          <h1 className="text-4xl font-semibold">Saylani Welfare</h1>
          <p className="mt-4">Saylani lone Formula</p>
        </section>

        <LoanCategories />
        <LoanCalculator selectedCategory={undefined} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
