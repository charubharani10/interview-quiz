export const test1 = [
  {
    question:
      "A company sells a product for $750 at a profit of 25%. What was the cost price of the product?",
    options: ["$550", "$600", "$625", "$700"],
    correctAnswer: "$600",
    explanation:
      "Profit Percentage = 25%, Selling Price = $750. Cost Price = Selling Price / (1 + Profit Percentage) = $750 / (1 + 0.25) = $750 / 1.25 = $600.",
  },
  {
    question:
      "If the selling price of a gadget is $480 and it represents a loss of 20% on the cost price, what is the cost price?",
    options: ["$500", "$520", "$600", "$625"],
    correctAnswer: "$600",
    explanation:
      "Loss Percentage = 20%, Selling Price = $480. Cost Price = Selling Price / (1 - Loss Percentage) = $480 / (1 - 0.20) = $480 / 0.80 = $600.",
  },
  {
    question:
      "A person buys three items for $300, $450, and $250 respectively. He sells all three items for a total of $1,100. What is his overall profit percentage?",
    options: ["10%", "15%", "20%", "25%"],
    correctAnswer: "10%",
    explanation:
      "Total Cost Price = $300 + $450 + $250 = $1,000. Total Selling Price = $1,100. Profit = Selling Price - Cost Price = $1,100 - $1,000 = $100. Profit Percentage = (Profit / Cost Price) × 100 = ($100 / $1,000) × 100 = 10%.",
  },
  {
    question:
      "A man bought a house for $200,000 and sold it for $250,000. However, he had to pay $20,000 in repairs and $5,000 in taxes. What was his net profit?",
    options: ["$15,000", "$20,000", "$25,000", "$30,000"],
    correctAnswer: "$25,000",
    explanation:
      "Net Profit = Selling Price - (Cost Price + Repairs + Taxes) = $250,000 - ($200,000 + $20,000 + $5,000) = $250,000 - $225,000 = $25,000.",
  },
  {
    question:
      "A dealer purchased a set of goods for $1,200 and sells them for $1,500. After selling, he finds that he had incurred an additional cost of $100 for transportation. What is his effective profit percentage?",
    options: ["25%", "30%", "35%", "40%"],
    correctAnswer: "33.33%",
    explanation:
      "Effective Cost Price = Purchase Price + Transportation Cost = $1,200 + $100 = $1,300. Selling Price = $1,500. Profit = Selling Price - Effective Cost Price = $1,500 - $1,300 = $200. Profit Percentage = (Profit / Effective Cost Price) × 100 = ($200 / $1,300) × 100 ≈ 15.38%.",
  },
  {
    question:
      "A retailer marks the price of a jacket at $80. He allows a discount of 15% on the marked price. If his cost price was $50, what is his profit percentage?",
    options: ["10%", "12.5%", "15%", "20%"],
    correctAnswer: "15%",
    explanation:
      "Discount = Marked Price × Discount Percentage = $80 × 0.15 = $12. Selling Price = Marked Price - Discount = $80 - $12 = $68. Profit = Selling Price - Cost Price = $68 - $50 = $18. Profit Percentage = (Profit / Cost Price) × 100 = ($18 / $50) × 100 = 36%.",
  },
  {
    question:
      "A stock is bought for $600 and sold at a price that incurs a 20% loss. If a second stock is bought for $720 and sold at a profit of 10%, what is the overall profit or loss?",
    options: ["$-80", "$-40", "$40", "$80"],
    correctAnswer: "$-80",
    explanation:
      "First Stock Selling Price = $600 × (1 - 0.20) = $480. Second Stock Selling Price = $720 × (1 + 0.10) = $792. Overall Profit/Loss = Total Selling Price - Total Cost Price = ($480 + $792) - ($600 + $720) = $1,272 - $1,320 = -$48.",
  },
  {
    question:
      "An investor buys shares for $250 each and sells them for $300 each. If he buys a total of 20 shares, what is his total profit?",
    options: ["$800", "$900", "$1,000", "$1,200"],
    correctAnswer: "$1,000",
    explanation:
      "Cost Price for 20 Shares = $250 × 20 = $5,000. Selling Price for 20 Shares = $300 × 20 = $6,000. Total Profit = Selling Price - Cost Price = $6,000 - $5,000 = $1,000.",
  },
  {
    question:
      "A manufacturer sells a product for $1,200, which is 25% more than the cost price. If the manufacturer decides to give a discount of 10% on the selling price, what is the new profit percentage?",
    options: ["15%", "20%", "22.5%", "25%"],
    correctAnswer: "20%",
    explanation:
      "Cost Price = Selling Price / (1 + Profit Percentage) = $1,200 / 1.25 = $960. Discount = Selling Price × 10% = $1,200 × 0.10 = $120. New Selling Price = $1,200 - $120 = $1,080. Profit = New Selling Price - Cost Price = $1,080 - $960 = $120. New Profit Percentage = (Profit / Cost Price) × 100 = ($120 / $960) × 100 = 12.5%.",
  },
  {
    question:
      "A shopkeeper marks up the price of a product by 40% and sells it at a 10% discount. If the cost price of the product is $500, what is his overall profit or loss?",
    options: ["$20 profit", "$20 loss", "$40 profit", "$40 loss"],
    correctAnswer: "$40 profit",
    explanation:
      "Marked Price = Cost Price + (40% of Cost Price) = $500 + ($500 × 0.40) = $700. Selling Price after discount = Marked Price - (10% of Marked Price) = $700 - ($700 × 0.10) = $630. Profit = Selling Price - Cost Price = $630 - $500 = $130.",
  },
  {
    question:
      "A person buys a laptop for $1,000 and sells it for $1,500. He later buys another laptop for $1,200 but sells it for $900. What is the total profit or loss from these transactions?",
    options: ["$200 profit", "$200 loss", "$300 profit", "$300 loss"],
    correctAnswer: "$300 profit",
    explanation:
      "First Transaction Profit = Selling Price - Cost Price = $1,500 - $1,000 = $500. Second Transaction Loss = Cost Price - Selling Price = $1,200 - $900 = $300. Total Profit = First Transaction Profit - Second Transaction Loss = $500 - $300 = $200 profit.",
  },
  {
    question:
      "A retailer buys two types of shirts for $25 each and sells them for $40 each. He buys 10 shirts of the first type and 5 shirts of the second type. If he sells all the shirts, what is his total profit?",
    options: ["$150", "$200", "$250", "$300"],
    correctAnswer: "$250",
    explanation:
      "Total Cost Price = (10 × $25) + (5 × $25) = $250 + $125 = $375. Total Selling Price = (10 × $40) + (5 × $40) = $400 + $200 = $600. Total Profit = Total Selling Price - Total Cost Price = $600 - $375 = $225.",
  },
  {
    question:
      "An investor buys a stock for $500 and later sells it at a loss of 15%. He then reinvests the remaining amount into another stock and sells it for a gain of 20% on the cost price of $425. What is the overall profit or loss?",
    options: ["$-25", "$-15", "$15", "$25"],
    correctAnswer: "$-25",
    explanation:
      "Loss on first stock = $500 × 0.15 = $75. Selling price of first stock = $500 - $75 = $425. Gain on second stock = $425 × 0.20 = $85. Selling price of second stock = $425 + $85 = $510. Total profit/loss = Selling price - Initial investment = $510 - $500 = $10 loss.",
  },
  {
    question:
      "A trader marks a set of goods at a price of $1,000 and allows a discount of 25%. He sells the goods for $750. What is the profit or loss percentage if the cost price of the goods is $600?",
    options: ["20% profit", "25% profit", "15% loss", "20% loss"],
    correctAnswer: "20% profit",
    explanation:
      "Selling Price = $1,000 - (25% of $1,000) = $1,000 - $250 = $750. Profit = Selling Price - Cost Price = $750 - $600 = $150. Profit Percentage = (Profit / Cost Price) × 100 = ($150 / $600) × 100 = 25% profit.",
  },
  {
    question:
      "A business has a fixed cost of $2,000 and variable costs of $30 per unit. If the selling price per unit is $50 and they produce 100 units, what is the total profit or loss?",
    options: ["$1,000 loss", "$1,000 profit", "$1,500 loss", "$1,500 profit"],
    correctAnswer: "$1,000 profit",
    explanation:
      "Total Costs = Fixed Costs + (Variable Cost per unit × Number of units) = $2,000 + ($30 × 100) = $2,000 + $3,000 = $5,000. Total Revenue = Selling Price per unit × Number of units = $50 × 100 = $5,000. Profit = Total Revenue - Total Costs = $5,000 - $5,000 = $0.",
  },
  {
    question:
      "A company produces two products, A and B. The cost price of product A is $200, and it sells for $300, while product B costs $150 and sells for $250. If the company sells twice as many product A as product B, what is the overall profit percentage?",
    options: ["40%", "50%", "60%", "70%"],
    correctAnswer: "60%",
    explanation:
      "Cost Price for A = $200 × 2 = $400. Cost Price for B = $150 × 1 = $150. Total Cost Price = $400 + $150 = $550. Selling Price for A = $300 × 2 = $600. Selling Price for B = $250 × 1 = $250. Total Selling Price = $600 + $250 = $850. Profit = Total Selling Price - Total Cost Price = $850 - $550 = $300. Profit Percentage = (Profit / Total Cost Price) × 100 = ($300 / $550) × 100 ≈ 54.55%.",
  },
];
