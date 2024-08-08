import "./App.css";

const NutFacts = ({
  calories,
  fat,
  sFat,
  tFat,
  cholesterol,
  sodium,
  carbs,
  protein,
  fiber,
  sugar,
  vitaminD,
  calcium,
  iron,
  potassium,
}) => {
  return (
    <div className="nutritionDiv">
      <h1>
        <span style={{ borderBottom: "5px solid black" }}>Nutrition Facts</span>
      </h1>
      <div className="nutritionSection">
        <div className="nutritionSection2">
          <p className="nutritionLabel">
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
              Calories:{" "}
            </span>
          </p>
          <p className="nutritionInfo">
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
              {calories}
            </span>
          </p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel">Fat:</p>
          <p className="nutritionInfo">{fat}g</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel2">Saturated Fat:</p>
          <p className="nutritionInfo2">{sFat}g</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel2">Trans Fat:</p>
          <p className="nutritionInfo2">{tFat}g</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel">Cholesterol:</p>
          <p className="nutritionInfo">{cholesterol}g</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel">Sodium:</p>
          <p className="nutritionInfo">{sodium}mg</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel">Total Carbohydrate:</p>
          <p className="nutritionInfo">{carbs}g</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel2">Fiber:</p>
          <p className="nutritionInfo2">{fiber}g</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel2">Sugar:</p>
          <p className="nutritionInfo2">{sugar}g</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel">Protein:</p>
          <p className="nutritionInfo"> {protein}g</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel2">Vitamin D: </p>
          <p className="nutritionInfo2">{vitaminD}mg</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel2">Calcium: </p>
          <p className="nutritionInfo2">{calcium}mg</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel2">Iron: </p>
          <p className="nutritionInfo2">{iron}mg</p>
        </div>

        <div className="nutritionSection2">
          <p className="nutritionLabel2">Potassium: </p>
          <p className="nutritionInfo2">{potassium}mg</p>
        </div>
      </div>
    </div>
  );
};

export default NutFacts;
