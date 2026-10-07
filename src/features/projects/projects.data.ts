import sfrhub from "@/assets/projects/sfrhub.png";
import sfrhub1 from "@/assets/projects/sfrhub1.png";
import sfrhub2 from "@/assets/projects/sfrhub2.png";
import sfrhub3 from "@/assets/projects/sfrhub3.png";
import urent1 from "@/assets/projects/urent/urent1.png";
import urent2 from "@/assets/projects/urent/urent2.png";
import urent3 from "@/assets/projects/urent/urent3.png";
import { links } from "@/content/site";
import type { Project } from "./types";

const macroRaw =
  "https://raw.githubusercontent.com/ashan-shashika/macroeconomic-impact-stock-ml/master/results";

const macroShapImportance = `${macroRaw}/shap_plots/XGB_SHAP_Importance.png`;
const macroActualVsPredicted = `${macroRaw}/model_XGBoost/actual_vs_predicted_over_time.png`;
const macroCorrelation = `${macroRaw}/eda_after_preprocessing/03_correlation_heatmap.png`;
const macroOptuna = `${macroRaw}/model_XGBoost/optuna_optimization_history.png`;
const macroTimeseries = `${macroRaw}/eda/03_macro_timeseries_panel.png`;

const nnRaw =
  "https://raw.githubusercontent.com/ashan-shashika/neural_network/master/images";

const nnArchitecture = `${nnRaw}/nn.png`;
const nnDecisionBoundary = `${nnRaw}/decision_boundary.png`;
const nnLossAccuracy = `${nnRaw}/loss_accuracy.png`;
const nnEpochLoss = `${nnRaw}/epoch_vs_avgLoss.png`;
const nnScatter = `${nnRaw}/scatter_plot.png`;

export const projects: Project[] = [
  {
    name: "SVN (SFRHub)",
    summary: `A data-driven commercial real estate marketplace focused on single-family rental and build-to-rent portfolios. 
    I contributed to full-stack development across property discovery, search, portfolio data and investment workflows.`,

    problem: `Real estate investors and operators need to efficiently discover, 
    evaluate and manage large property portfolios using complex property and market data. 
    SFRHub brings these workflows together in a single digital marketplace.`,

    solution: `A full-stack marketplace built around a React frontend and GraphQL API architecture, 
    supported by Node.js, MySQL, Elasticsearch and AWS. The platform combines property data, 
    search and portfolio workflows to support data-driven real estate transactions.`,

    contribution: `Contributed to frontend and full-stack development across React and TypeScript applications, 
    GraphQL APIs, property search and data-driven features. Worked with Elasticsearch, 
    MySQL and AWS to support the platform's search and application workflows.`,

    tech: [
      "React",
      "TypeScript",
      "Apollo GraphQL",
      "Node.js",
      "GraphQL",
      "Elasticsearch",
      "AWS",
      "PostgreSQL",
    ],
    images: [
      {
        src: sfrhub,
        alt: "Property map beside a list of listings",
        caption: "Map and listings",
      },
      {
        src: sfrhub1,
        alt: "Property detail page",
        caption: "Property detail",
      },
      {
        src: sfrhub2,
        alt: "Search filters panel",
        caption: "Search and filters",
      },
      {
        src: sfrhub3,
        alt: "Search filters panel",
        caption: "Search and filters",
      },
    ],
    live: "https://svn.com/",
  },
  {
    name: "URent",
    summary: `A multi-sided vehicle marketplace connecting vehicle owners with customers through vehicle discovery, listings and booking workflows. I contributed to full-stack development across the platform's core marketplace experience.`,

    problem: `Vehicle owners need a simple way to list and manage their vehicles, while customers need to discover suitable vehicles and complete rental bookings. URent brings both sides together through a single digital marketplace.`,

    solution: `A full-stack marketplace connecting Hosts and Guests through vehicle listings, search, availability and booking workflows. The platform uses a React frontend with GraphQL and Node.js services, supported by MySQL, Elasticsearch and AWS`,

    contribution: `Contributed to frontend and full-stack development using React and TypeScript, working with GraphQL APIs, search functionality and data-driven marketplace workflows. Worked across the application stack to deliver and maintain features for both Host and Guest experiences.`,

    tech: ["React", "TypeScript", "GraphQL"],

    images: [
      {
        src: urent1,
        alt: "Till screen with a basket total and product quick-keys",
        caption: "Till screen",
      },
      {
        src: urent3,
        alt: "Payment and receipt screen",
        caption: "Receipt and payment",
      },
      {
        src: urent2,
        alt: "Stock and bundle pricing screen",
        caption: "Stock and bundles",
      },
    ],
    live: "https://urent.com/",
  },
  {
    name: "Macroeconomic Drivers of the S&P 500",
    summary: `My MSc Data Science research project. I tested whether AI could predict how the 
    US stock market moves each month using economic data like inflation, interest rates and 
    market fear, and which of these matter most to different industries.`,

    problem: `We know the economy affects the stock market, but it's hard to say which factors 
    matter most, or whether they affect industries like tech and energy differently. Many AI 
    models make predictions without explaining why, which makes them hard to trust.`,

    solution: `I collected 35 years of economic and stock market data and trained several AI models 
    to predict monthly market movements. I then used explainable AI to show which economic factors 
    drove each prediction, and repeated the analysis across five industries.`,

    contribution: `Built the full pipeline solo: data collection, EDA, preprocessing, 11 trained models 
    with Optuna Bayesian hyperparameter tuning, and a reusable evaluation and SHAP comparison toolkit. 
    The models predict the direction of the S&P 500's monthly move correctly 71–74% of the time on 
    unseen data, with tuned XGBoost achieving the best test R² (0.35). Identified VIX as the dominant 
    macro driver across every sector.`,

    tech: [
      "Python",
      "Machine Learning",
      "scikit-learn",
      "TensorFlow",
      "Optuna",
      "SHAP",
      "Pandas",
    ],
    images: [
      {
        src: macroShapImportance,
        alt: "Bar chart ranking macroeconomic features by mean SHAP importance in the XGBoost model",
        caption: "SHAP feature importance",
      },
      {
        src: macroActualVsPredicted,
        alt: "Line chart of actual vs predicted monthly S&P 500 returns over time",
        caption: "Actual vs predicted returns",
      },
      {
        src: macroCorrelation,
        alt: "Correlation heatmap of macroeconomic indicators and S&P 500 returns",
        caption: "Correlation analysis",
      },
      {
        src: macroOptuna,
        alt: "Optuna optimisation history showing model error improving across tuning trials",
        caption: "Hyperparameter tuning",
      },
      {
        src: macroTimeseries,
        alt: "Panel of time series charts for seven macroeconomic indicators from 1990 to 2025",
        caption: "Macro indicators, 1990–2025",
      },
    ],
    live: "",
    repo: `${links.github}/macroeconomic-impact-stock-ml`,
  },
  {
    name: "Neural Networks: Behind the Scenes",
    summary: `An interactive, maths-first walkthrough of how a neural network actually learns. 
    I built a binary classifier, traced every calculation by hand from forward pass to weight update, 
    then ran a controlled experiment showing why Adam beats plain gradient descent.`,

    problem: `Most people use neural networks as black boxes: call model.fit() and hope. 
    That makes it hard to debug training, pick optimisers or explain results to others. 
    I wanted to show, with real numbers, exactly what happens inside the network on every step.`,

    solution: `A published technical article on GitHub Pages that follows one 2-2-1 network 
    (ReLU hidden layer, sigmoid output) through forward propagation, binary cross-entropy loss, 
    chain-rule backpropagation and gradient-descent updates, then proves the update worked by 
    showing the loss drop. It finishes with a fair SGD vs Adam benchmark: same architecture, 
    data, seed and epochs, changing only the optimiser.`,

    contribution: `Designed the dataset and network, derived every gradient by hand and verified them in 
    Python, and built the experiments in TensorFlow/Keras. Adam reached 95% accuracy in 23 epochs and 
    finished at 100% (loss 0.004), while SGD plateaued at 80%, backed by loss, accuracy and decision-boundary 
    plots. Wrote and designed the full article, citing the original Adam and ReLU papers.`,

    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Matplotlib",
      "Jupyter",
      "HTML",
      "CSS",
    ],
    images: [
      {
        src: nnArchitecture,
        alt: "Diagram of a 2-2-1 neural network with labelled weights and biases",
        caption: "Network architecture",
      },
      {
        src: nnDecisionBoundary,
        alt: "Side-by-side decision boundaries learned by SGD and Adam",
        caption: "SGD vs Adam decision boundaries",
      },
      {
        src: nnLossAccuracy,
        alt: "Training loss and accuracy curves comparing SGD and Adam",
        caption: "Loss and accuracy over epochs",
      },
      {
        src: nnEpochLoss,
        alt: "Average loss decreasing over training epochs",
        caption: "Average loss per epoch",
      },
      {
        src: nnScatter,
        alt: "Scatter plot of the two-class training dataset",
        caption: "Training data",
      },
    ],
    live: "https://ashan-shashika.github.io/neural_network/",
    repo: `${links.github}/neural_network`,
  },
];
