import { Question } from './types';

export const QUIZ_AI_1: Question[] = [
  {
    id: 1,
    question: "What is Machine Learning?",
    options: [
      "A subfield of artificial intelligence",
      "A traditional programming technique",
      "A programming language",
      "A type of database"
    ],
    correctAnswerIndex: 0,
    explanation: "Machine Learning is a subfield of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed."
  },
  {
    id: 2,
    question: "What is the main characteristic of Machine Learning?",
    options: [
      "The use of conditional logic",
      "The use of predefined rules",
      "Learning from data",
      "Manual configuration by experts"
    ],
    correctAnswerIndex: 2,
    explanation: "The defining characteristic of Machine Learning is its ability to learn patterns directly from data, rather than following explicitly programmed rules."
  },
  {
    id: 3,
    question: "What is Deep Learning?",
    options: [
      "A type of state machine",
      "A Machine Learning technique based on deep neural networks",
      "A sorting algorithm",
      "A data compression method"
    ],
    correctAnswerIndex: 1,
    explanation: "Deep Learning is a subset of Machine Learning that uses deep neural networks with multiple layers to learn complex representations from data."
  },
  {
    id: 4,
    question: "What is an activation function in a neural network?",
    options: [
      "A function that introduces non-linearity into the model",
      "A function that initializes the network weights",
      "A function that calculates the average of the inputs",
      "A function that splits data into batches"
    ],
    correctAnswerIndex: 0,
    explanation: "An activation function introduces non-linearity into the neural network, allowing it to learn and represent complex patterns beyond simple linear relationships."
  },
  {
    id: 5,
    question: "What is overfitting in Machine Learning?",
    options: [
      "A phenomenon where the model achieves optimal performance",
      "A phenomenon where the model does not learn enough from the training data",
      "A phenomenon where the model memorizes training data and does not generalize well",
      "A phenomenon where the model trains too quickly"
    ],
    correctAnswerIndex: 2,
    explanation: "Overfitting occurs when a model learns the training data too well — including its noise — and fails to generalize to new, unseen data."
  },
  {
    id: 6,
    question: "What is gradient descent?",
    options: [
      "An optimization algorithm for adjusting the parameters of a model",
      "An algorithm for sorting data",
      "An algorithm for splitting data into training and testing sets",
      "A method for visualizing neural networks"
    ],
    correctAnswerIndex: 0,
    explanation: "Gradient descent is an optimization algorithm that iteratively adjusts model parameters in the direction that minimizes the cost function."
  },
  {
    id: 7,
    question: "What is the main difference between classification and regression?",
    options: [
      "Classification predicts categories; regression predicts continuous values",
      "Classification predicts discrete values only",
      "Classification predicts continuous values; regression predicts categories",
      "There is no difference between them"
    ],
    correctAnswerIndex: 0,
    explanation: "Classification predicts which category an input belongs to (e.g., spam/not spam), while regression predicts a continuous numerical value (e.g., a price)."
  },
  {
    id: 8,
    question: "What is the typical representation of outputs in a binary classification problem?",
    options: [
      "Continuous values between 0 and 100",
      "Several classes (3 or more)",
      "Two classes (0 or 1)",
      "Floating point probabilities only"
    ],
    correctAnswerIndex: 2,
    explanation: "Binary classification outputs are represented as two mutually exclusive classes, typically encoded as 0 or 1 (e.g., yes/no, true/false)."
  },
  {
    id: 9,
    question: "Predicting a student's grade based on hours of study is what type of problem?",
    options: [
      "A multiclass classification problem",
      "A binary classification problem",
      "A regression problem",
      "An unsupervised learning problem"
    ],
    correctAnswerIndex: 2,
    explanation: "Predicting a grade is a regression problem since the output (the grade) is a continuous numerical value, not a category."
  },
  {
    id: 10,
    question: "For an e-commerce recommendation system, what is the primary business objective?",
    options: [
      "Improve customer age prediction",
      "Increase customer satisfaction",
      "Increase sales by recommending relevant products",
      "Reduce server costs"
    ],
    correctAnswerIndex: 2,
    explanation: "The core business objective of a recommendation system is to increase sales by surfacing products customers are most likely to purchase."
  }
];

export const QUIZ_AI_2: Question[] = [
  {
    id: 11,
    question: "Predicting the maximum temperature today from past weather data is what type of problem?",
    options: [
      "Regression",
      "Binary classification",
      "Multiclass classification",
      "Clustering"
    ],
    correctAnswerIndex: 0,
    explanation: "Temperature is a continuous numerical value, making this a regression problem."
  },
  {
    id: 12,
    question: "A system predicts whether a sound is 'hello', 'goodbye', or unrecognized. What type of problem is this?",
    options: [
      "Regression",
      "Binary classification",
      "Multiclass classification",
      "Dimensionality reduction"
    ],
    correctAnswerIndex: 2,
    explanation: "Since there are 3 possible output categories (hello, goodbye, unrecognized), this is a multiclass classification problem."
  },
  {
    id: 13,
    question: "What is precision as a performance metric?",
    options: [
      "True positives divided by true negatives",
      "True positives divided by the total number of examples",
      "True positives divided by the sum of true positives and false positives",
      "True positives divided by the sum of true positives and false negatives"
    ],
    correctAnswerIndex: 2,
    explanation: "Precision measures the accuracy of positive predictions: TP / (TP + FP). It answers 'of all the positive predictions, how many were actually correct?'"
  },
  {
    id: 14,
    question: "What is Mean Absolute Error (MAE)?",
    options: [
      "The mean of the squares of the differences between predicted and actual values",
      "The square root of the mean of squared differences between predicted and actual values",
      "The average of the absolute values of differences between predicted and actual values",
      "The sum of all prediction errors"
    ],
    correctAnswerIndex: 2,
    explanation: "MAE is the average of |predicted - actual| over all samples. It gives an intuitive measure of average prediction error in the same units as the target."
  },
  {
    id: 15,
    question: "What does a ROC (Receiver Operating Characteristic) curve represent?",
    options: [
      "Model performance as a function of the number of training iterations",
      "Model performance depending on the size of the dataset",
      "Model performance across different classification thresholds",
      "Model performance on the training set vs. the test set"
    ],
    correctAnswerIndex: 2,
    explanation: "A ROC curve plots True Positive Rate vs. False Positive Rate at various classification thresholds, visualizing the trade-off a model makes."
  },
  {
    id: 16,
    question: "In which type of model is a confusion matrix most commonly used?",
    options: [
      "Classification models",
      "Dimensionality reduction models",
      "Clustering models",
      "Regression models"
    ],
    correctAnswerIndex: 0,
    explanation: "A confusion matrix summarizes the correct and incorrect predictions for each class, making it a standard evaluation tool for classification models."
  },
  {
    id: 17,
    question: "What is a cost function in machine learning?",
    options: [
      "A measure of the error between model predictions and actual values",
      "A function to generate synthetic data",
      "A function to initialize the weights of a model",
      "A function to scale the input features"
    ],
    correctAnswerIndex: 0,
    explanation: "The cost (or loss) function quantifies how far the model's predictions are from the true values. Minimizing it is the goal of training."
  },
  {
    id: 18,
    question: "What is accuracy as a performance metric?",
    options: [
      "The proportion of correct predictions among all predictions",
      "The proportion of true positives among all positives",
      "The average distance between predicted and actual values",
      "The area under the ROC curve"
    ],
    correctAnswerIndex: 0,
    explanation: "Accuracy = (correct predictions) / (total predictions). It measures the overall fraction of predictions the model got right."
  },
  {
    id: 19,
    question: "System 1: MAE=2.35, RMSE=5.46. System 2: MAE=3.15, RMSE=3.85. Which system had the largest individual errors?",
    options: [
      "System 1",
      "System 2",
      "Both are equivalent",
      "Impossible to determine"
    ],
    correctAnswerIndex: 0,
    explanation: "System 1 has a much higher RMSE (5.46 vs 3.85). Since RMSE penalizes large errors more heavily than MAE, the large gap indicates System 1 made bigger individual errors."
  },
  {
    id: 20,
    question: "To evaluate a system predicting temperature from past temperatures, what metric should be used?",
    options: [
      "RMSE (Root Mean Squared Error)",
      "Confusion matrix",
      "Accuracy",
      "Precision"
    ],
    correctAnswerIndex: 0,
    explanation: "Temperature prediction is a regression problem. RMSE is an appropriate regression metric; confusion matrices and accuracy are for classification tasks."
  }
];

export const QUIZ_AI_3: Question[] = [
  {
    id: 21,
    question: "True or False: You can use the same neural network (same neurons, layers, connections) to solve 2 different problems.",
    options: [
      "True — neural networks are universal and reusable",
      "False — architecture must be adapted to each specific problem",
      "True, but only for similar problem types",
      "False, only for problems with different input sizes"
    ],
    correctAnswerIndex: 1,
    explanation: "The architecture (number of neurons, layers, connections) must be tailored to the specific problem. A network designed for image recognition cannot be directly reused for text generation."
  },
  {
    id: 22,
    question: "True or False: Deep Learning systems are sensitive to bias in training data.",
    options: [
      "True — biased data leads to biased models",
      "False — deep learning automatically corrects data bias",
      "True, but only for small datasets",
      "False — regularization removes all bias"
    ],
    correctAnswerIndex: 0,
    explanation: "Deep Learning models learn patterns from training data. If that data is biased, the model will learn and reproduce those biases in its predictions."
  },
  {
    id: 23,
    question: "True or False: Deep Learning has a 'black box' effect — we don't fully understand the solution it computes.",
    options: [
      "True — internal representations are difficult to interpret",
      "False — all computations are fully transparent",
      "True, but only for models with over 10 layers",
      "False — gradient descent makes models fully explainable"
    ],
    correctAnswerIndex: 0,
    explanation: "Deep Learning models are often considered black boxes because the reasoning behind their predictions is encoded across millions of parameters and is hard to interpret."
  },
  {
    id: 24,
    question: "True or False: The training cost of Deep Learning is high compared to traditional algorithmic solutions.",
    options: [
      "False — deep learning is always faster to train",
      "True — training requires significant computation resources",
      "False — modern GPUs have eliminated this problem",
      "True, but only for image-related tasks"
    ],
    correctAnswerIndex: 1,
    explanation: "Training deep neural networks requires many matrix operations over large datasets, demanding significant compute resources (GPUs/TPUs) and time."
  },
  {
    id: 25,
    question: "True or False: A solution based on classical computer vision gives better results than one based on Deep Learning.",
    options: [
      "True — classical methods are always more reliable",
      "False — Deep Learning has surpassed classical computer vision on most benchmarks",
      "True, but only for real-time applications",
      "False, but only for black-and-white images"
    ],
    correctAnswerIndex: 1,
    explanation: "Since AlexNet in 2012, Deep Learning has consistently outperformed classical computer vision approaches on major benchmarks such as ImageNet."
  },
  {
    id: 26,
    question: "True or False: Deep Learning has good generalization capacity on data not seen during training.",
    options: [
      "False — it always overfits the training data",
      "True — when trained well, it generalizes effectively to new inputs",
      "False — it requires retraining for every new input",
      "True, but only with very large datasets"
    ],
    correctAnswerIndex: 1,
    explanation: "When properly trained with sufficient data and regularization, Deep Learning models can generalize well and give good predictions on unseen inputs."
  },
  {
    id: 27,
    question: "True or False: It is easy to find good values for hyperparameters (learning rate, number of layers/neurons per layer).",
    options: [
      "True — there are standard values that always work",
      "False — hyperparameter tuning is complex and often requires extensive search",
      "True — AutoML has completely solved this problem",
      "False, but only for recurrent neural networks"
    ],
    correctAnswerIndex: 1,
    explanation: "Hyperparameter tuning is one of the most challenging parts of Deep Learning. There are no universal optimal values; it requires experimentation, domain knowledge, and often automated search strategies."
  }
];

// Helper to get all AI/ML questions combined
export const ALL_AI_QUESTIONS = [...QUIZ_AI_1, ...QUIZ_AI_2, ...QUIZ_AI_3];
