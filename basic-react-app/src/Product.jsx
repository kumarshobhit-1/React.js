import "./App.css";
import "./Product.css";
import Price from "./Price";
import Button from "./button";

export default function Product({ title, idx}) {
    let oldPrice = ["12,495","11,980","1,599","599"]
    let newPrice = ["8,999","9,199","899","278"]
    let description = [
        ["8,000 DPI","5 Programmable buttons"],
        ["designed for iPad Pro","intutive surface"],
        ["intutive surface","designed for iPad Pro"],
        ["wireless","optical orientation"]
    ]
      return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />

            <Button />
        </div>
    );
}

