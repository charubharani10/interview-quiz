import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const { skill, testId } = req.query;
  
  try {
    // Get the absolute path to the questions file
    const questionsPath = path.join(process.cwd(), 'public', 'questions', skill, `test${testId}.json`);
    
    // Check if file exists
    if (!fs.existsSync(questionsPath)) {
      console.error(`Questions file not found: ${questionsPath}`);
      return res.status(404).json({ error: 'Questions not found' });
    }
    
    // Read and parse the JSON file
    const fileContent = fs.readFileSync(questionsPath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Return the questions array
    res.status(200).json(data.questions);
  } catch (error) {
    console.error('Error loading questions:', error);
    res.status(500).json({ error: 'Failed to load questions: ' + error.message });
  }
} 