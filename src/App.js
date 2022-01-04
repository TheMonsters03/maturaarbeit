import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import { 
  MathMode, HomePage, BasicAddition, BasicSubtraction, BasicMultiplication, BasicDivision,
  ChemMode, CSMode, MusicMode, PhysicsMode, Combinatorics, ExponentialGrowth, Deviation, ExponentsAndLogarithms, Integration, LawOfSineAndCosine, LESAndMatrices, LinearEquation, LinearFunction, PolarCoordinates, Probability, ProportionalityAndRuleOfThree, Pythagoras, QuadraticEquation, QuadraticFunction, ScalarAndVectorProduct, ScalesAndModels, Trigonometry, Template1s, Template2s, Template3s, Template4s } from './pages';
import DocumentMeta from 'react-document-meta';
import BasicSubtractionFlashcard from './pages/flashcard/BasicSubtractionFlashcard';
import { BasicAdditionExam, BasicDivisionExam, BasicMultiplicationExam, BasicSubtractionExam, CombinatoricsExam, DeviationsExam, ExponentialGrowthExam, ExponentsAndLogarithmsExam, IntegrationExam, LawOfSinesAndCosinesExam, LinearEquationsExam, LinearFunctionsExam, LinearSystemOfEquationsAndMatricesExam, PolarCoordinatesExam, ProbabilityExam, ProportionalityAndRuleOfThreeExam, PythagorasExam, QuadraticEquationsExam, QuadraticFunctionsExam, ScalarAndVectorProductExam, ScalesAndModelsExam, Template1Exam, Template2Exam, Template3Exam, Template4Exam, TrigonometryExam } from './pages/exam';
import { BasicAdditionFlashcard, BasicDivisionFlashcard, BasicMultiplicationFlashcard, CombinatoricsFlashcard, DeviationsFlashcard, ExponentialGrowthFlashcard, ExponentsAndLogarithmsFlashcard, IntegrationFlashcard, LawOfSinesAndCosinesFlashcard, LinearEquationsFlashcard, LinearFunctionsFlashcard, LinearSystemOfEquationsAndMatricesFlashcard, PolarCoordinatesFlashcard, ProbabilityFlashcard, ProportionalityAndRuleOfThreeFlashcard, PythagorasFlashcard, QuadraticEquationsFlashcard, QuadraticFunctionsFlashcard, ScalarAndVectorProductFlashcard, ScalesAndModelsFlashcard, Template1Flashcard, Template2Flashcard, Template3Flashcard, Template4Flashcard, TrigonometryFlashcard } from './pages/flashcard';


//Framework:
//Router function aswell as the app itself

function App() {
  const meta = {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    title: "Examate"
  }

  return (
    <DocumentMeta {...meta}>
      <Router>
        <Switch>  
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/math">
            <MathMode />
          </Route>
          <Route exact path="/math/basic_addition">
            <BasicAddition />
          </Route>
          <Route exact path="/math/basic_addition/flashcard_mode">
            <BasicAdditionFlashcard />
          </Route>
          <Route exact path="/math/basic_addition/exam_mode">
            <BasicAdditionExam />
          </Route>
          <Route exact path="/math/basic_subtraction">
            <BasicSubtraction />
          </Route>
          <Route exact path="/math/basic_subtraction/flashcard_mode">
            <BasicSubtractionFlashcard/>
          </Route>
          <Route exact path="/math/basic_subtraction/exam_mode">
            <BasicSubtractionExam/>
          </Route>
          <Route exact path="/math/basic_multiplication">
            <BasicMultiplication />
          </Route>
          <Route exact path="/math/basic_multiplication/flashcard_mode">
            <BasicMultiplicationFlashcard />
          </Route>
          <Route exact path="/math/basic_multiplication/exam_mode">
            <BasicMultiplicationExam />
          </Route>
          <Route exact path="/math/basic_division">
            <BasicDivision />
          </Route>
          <Route exact path="/math/basic_division/flashcard_mode">
            <BasicDivisionFlashcard />
          </Route>
          <Route exact path="/math/basic_division/exam_mode">
            <BasicDivisionExam />
          </Route>
          <Route exact path="/math/combinatorics">
            <Combinatorics/>
          </Route>
          <Route exact path="/math/combinatorics/flashcard_mode">
            <CombinatoricsFlashcard/>
          </Route>
          <Route exact path="/math/combinatorics/exam_mode">
            <CombinatoricsExam/>
          </Route>
          <Route exact path="/math/deviations">
            <Deviation/>
          </Route>
          <Route exact path="/math/deviations/flashcard_mode">
            <DeviationsFlashcard/>
          </Route>
          <Route exact path="/math/deviations/exam_mode">
            <DeviationsExam/>
          </Route>
          <Route exact path="/math/exponential_growth">
            <ExponentialGrowth/>
          </Route>
          <Route exact path="/math/exponential_growth/flashcard_mode">
            <ExponentialGrowthFlashcard/>
          </Route>
          <Route exact path="/math/exponential_growth/exam_mode">
            <ExponentialGrowthExam/>
          </Route>
          <Route exact path="/math/exponents_logarithms">
            <ExponentsAndLogarithms/>
          </Route>
          <Route exact path="/math/exponents_logarithms/flashcard_mode">
            <ExponentsAndLogarithmsFlashcard/>
          </Route>
          <Route exact path="/math/exponents_logarithms/exam_mode">
            <ExponentsAndLogarithmsExam/>
          </Route>
          <Route exact path="/math/integration">
            <Integration/>
          </Route>
          <Route exact path="/math/integration/flashcard_mode">
            <IntegrationFlashcard/>
          </Route>
          <Route exact path="/math/integration/exam_mode">
            <IntegrationExam/>
          </Route>
          <Route exact path="/math/law_of_sine_cosine">
            <LawOfSineAndCosine/>
          </Route>
          <Route exact path="/math/law_of_sine_cosine/flashcard_mode">
            <LawOfSinesAndCosinesFlashcard/>
          </Route>
          <Route exact path="/math/law_of_sine_cosine/exam_mode">
            <LawOfSinesAndCosinesExam/>
          </Route>
          <Route exact path="/math/les_matrices">
            <LESAndMatrices/>
          </Route>
          <Route exact path="/math/les_matrices/flashcard_mode">
            <LinearSystemOfEquationsAndMatricesFlashcard/>
          </Route>
          <Route exact path="/math/les_matrices/exam_mode">
            <LinearSystemOfEquationsAndMatricesExam/>
          </Route>
          <Route exact path="/math/linear_equations">
            <LinearEquation/>
          </Route>
          <Route exact path="/math/linear_equations/flashcard_mode">
            <LinearEquationsFlashcard/>
          </Route>
          <Route exact path="/math/linear_equations/exam_mode">
            <LinearEquationsExam/>
          </Route>
          <Route exact path="/math/linear_functions">
            <LinearFunction/>
          </Route>
          <Route exact path="/math/linear_functions/flashcard_mode">
            <LinearFunctionsFlashcard/>
          </Route>
          <Route exact path="/math/linear_functions/exam_mode">
            <LinearFunctionsExam/>
          </Route>
          <Route exact path="/math/polar_coordinates">
            <PolarCoordinates/>
          </Route>
          <Route exact path="/math/polar_coordinates/flashcard_mode">
            <PolarCoordinatesFlashcard/>
          </Route>
          <Route exact path="/math/polar_coordinates/exam_mode">
            <PolarCoordinatesExam/>
          </Route>
          <Route exact path="/math/probability">
            <Probability/>
          </Route>
          <Route exact path="/math/probability/flashcard_mode">
            <ProbabilityFlashcard/>
          </Route>
          <Route exact path="/math/probability/exam_mode">
            <ProbabilityExam/>
          </Route>
          <Route exact path="/math/proportionality_rule_of_three">
            <ProportionalityAndRuleOfThree/>
          </Route>
          <Route exact path="/math/proportionality_rule_of_three/flashcard_mode">
            <ProportionalityAndRuleOfThreeFlashcard/>
          </Route>
          <Route exact path="/math/proportionality_rule_of_three/exam_mode">
            <ProportionalityAndRuleOfThreeExam/>
          </Route>
          <Route exact path="/math/pythagoras">
            <Pythagoras/>
          </Route>
          <Route exact path="/math/pythagoras/flashcard_mode">
            <PythagorasFlashcard/>
          </Route>
          <Route exact path="/math/pythagoras/exam_mode">
            <PythagorasExam/>
          </Route>
          <Route exact path="/math/quadratic_equations">
            <QuadraticEquation/>
          </Route>
          <Route exact path="/math/quadratic_equations/flashcard_mode">
            <QuadraticEquationsFlashcard/>
          </Route>
          <Route exact path="/math/quadratic_equations/exam_mode">
            <QuadraticEquationsExam/>
          </Route>
          <Route exact path="/math/quadratic_functions">
            <QuadraticFunction/>
          </Route>
          <Route exact path="/math/quadratic_functions/flashcard_mode">
            <QuadraticFunctionsFlashcard/>
          </Route>
          <Route exact path="/math/quadratic_functions/exam_mode">
            <QuadraticFunctionsExam/>
          </Route>
          <Route exact path="/math/scalar_vector_product">
            <ScalarAndVectorProduct/>
          </Route>
          <Route exact path="/math/scalar_vector_product/flashcard_mode">
            <ScalarAndVectorProductFlashcard/>
          </Route>
          <Route exact path="/math/scalar_vector_product/exam_mode">
            <ScalarAndVectorProductExam/>
          </Route>
          <Route exact path="/math/scales_models">
            <ScalesAndModels/>
          </Route>
          <Route exact path="/math/scales_models/flashcard_mode">
            <ScalesAndModelsFlashcard/>
          </Route>
          <Route exact path="/math/scales_models/exam_mode">
            <ScalesAndModelsExam/>
          </Route>
          <Route exact path="/math/trigonometry">
            <Trigonometry/>
          </Route>
          <Route exact path="/math/trigonometry/flashcard_mode">
            <TrigonometryFlashcard/>
          </Route>
          <Route exact path="/math/trigonometry/exam_mode">
            <TrigonometryExam/>
          </Route>
          <Route exact path="/chem">
            <ChemMode />
          </Route>
          <Route exact path="/cs">
            <CSMode />
          </Route>
          <Route exact path="/music">
            <MusicMode />
          </Route>
          <Route exact path="/physics">
            <PhysicsMode />
          </Route>
          <Route exact path="/math/template1">
            <Template1s />
          </Route>
          <Route exact path="/math/template1/flashcard_mode">
            <Template1Flashcard/>
          </Route>
          <Route exact path="/math/template1/exam_mode">
            <Template1Exam/>
          </Route>
          <Route exact path="/math/template2">
            <Template2s />
          </Route>
          <Route exact path="/math/template2/flashcard_mode">
            <Template2Flashcard/>
          </Route>
          <Route exact path="/math/template2/exam_mode">
            <Template2Exam/>
          </Route>
          <Route exact path="/math/template3">
            <Template3s/>
          </Route>
          <Route exact path="/math/template3/flashcard_mode">
            <Template3Flashcard/>
          </Route>
          <Route exact path="/math/template3/exam_mode">
            <Template3Exam/>
          </Route>
          <Route exact path="/math/template4">
            <Template4s />
          </Route>
          <Route exact path="/math/template4/flashcard_mode">
            <Template4Flashcard/>
          </Route>
          <Route exact path="/math/template4/exam_mode">
            <Template4Exam/>
          </Route>
          <Route path={"*"}>
            <Redirect to='/'/>
          </Route>
        </Switch>
      </Router>
    </DocumentMeta>
  );
}

export default App; 

