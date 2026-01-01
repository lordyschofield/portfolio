// Simple test for WebLLM models
import { CreateMLCEngine } from '@mlc-ai/web-llm';

async function testWebLLM() {
  console.log('🧪 Testing WebLLM models...');

  const modelsToTry = [
    'TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC',
  ];

  for (const modelName of modelsToTry) {
    try {
      console.log(`\n🔍 Testing ${modelName}...`);

      const engine = await CreateMLCEngine(modelName, {
        initProgressCallback: (progress) => {
          console.log(`${modelName}: ${(progress.progress * 100).toFixed(1)}%`);
        }
      });

      console.log(`✅ ${modelName} loaded successfully!`);

      // Test a simple completion
      const reply = await engine.chat.completions.create({
        messages: [{ role: 'user', content: 'Hello, who are you?' }],
        temperature: 0.7,
        max_tokens: 50
      });

      console.log(`💬 Response: ${reply.choices[0]?.message?.content || 'No response'}`);
      return; // Success, exit

    } catch (error) {
      console.log(`❌ ${modelName} failed: ${error.message}`);
    }
  }

  console.log('\n❌ All models failed to load');
}

testWebLLM();
