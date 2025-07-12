import categories from "../data/categories";
import CategoryCard from "../components/CategoryCard";

const Categories = () => (
  <div className="category-grid"> 
    {categories.map((cat) => (
      <CategoryCard key={cat.id} category={cat} />
    ))}
  </div>
);

export default Categories;