import React from "react";
import "./CategoriesPage.css";
import { useNavigate } from "react-router-dom";

const categories = [
    { name: "Electronics", image: "https://tse2.mm.bing.net/th/id/OIP.sPdyL3lk4NrLYJ28kf3v0wHaEK?pid=Api&P=0&h=180" },
    { name: "Fashion", image: "https://tse3.mm.bing.net/th/id/OIP.uOkRtWKwomLL5aCk4FjUZAHaDs?pid=Api&P=0&h=180" },
    { name: "Home & Kitchen", image: "https://tse3.mm.bing.net/th/id/OIP.FmKOgMoxiSxqolUTUDV4BwHaEK?pid=Api&P=0&h=180" },
    { name: "Beauty", image: "https://tse1.mm.bing.net/th/id/OIP.DRNn3y24YUTs4cNwSCWTmwHaEJ?pid=Api&P=0&h=180" },
    { name: "skincare", image: "https://tse4.mm.bing.net/th/id/OIP.Lx_CimhuX1gJhJ5_oVcirwHaE8?pid=Api&P=0&h=180" },
    { name: "Books", image: "https://tse1.mm.bing.net/th/id/OIP.HUJL-kp0qI7mElX0s9LEKwHaE7?pid=Api&P=0&h=180" },
    { name: "Homedecors", image: "https://tse1.mm.bing.net/th/id/OIP.1YH3qgFxr7P_xELqoausjwHaHa?pid=Api&P=0&h=180" },
    { name: "Footwear", image: "https://tse3.mm.bing.net/th/id/OIP.IBQwAbwdwmtBdWFQ9jI3xgHaE-?pid=Api&P=0&h=180" },
    { name: "Sports", image: "https://tse4.mm.bing.net/th/id/OIP.qrUcUfqmiD06QiyWLXaHLwHaD9?pid=Api&P=0&h=180" },
    { name: "cushions", image: "https://tse3.mm.bing.net/th/id/OIP.sPt4A1R-Xqtux2_pjX81yAHaHa?pid=Api&P=0&h=180" },
];

const CategoriesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="categories-page">
            <h2>Shop by Category</h2>
            <div className="categories-grid">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="category-card"
                        onClick={() => navigate(`/category/${cat.name.toLowerCase().replace(/ & /g, "-")}`)}
                    >
                        <img src={cat.image} alt={cat.name} />
                        <h3>{cat.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
