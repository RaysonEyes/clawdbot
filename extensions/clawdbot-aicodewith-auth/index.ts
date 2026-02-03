import { emptyPluginConfigSchema } from "clawdbot/plugin-sdk";

// AICodewith API 配置
const AICODEWITH_BASE_URL = "https://api.aicodewith.com/v1";

// Google Antigravity 模型定义（通过 AICodewith）
const ANTIGRAVITY_MODELS = [
  {
    id: "claude-opus-4-5-thinking",
    name: "Claude Opus 4.5 Thinking (Antigravity)",
    reasoning: true,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 16384,
  },
  {
    id: "claude-opus-4-5",
    name: "Claude Opus 4.5 (Antigravity)",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 16384,
  },
  {
    id: "claude-sonnet-4-5",
    name: "Claude Sonnet 4.5 (Antigravity)",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 8192,
  },
  {
    id: "claude-sonnet-4",
    name: "Claude Sonnet 4 (Antigravity)",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 8192,
  },
  {
    id: "gemini-2.0-flash-thinking-exp-01-21",
    name: "Gemini 2.0 Flash Thinking (Antigravity)",
    reasoning: true,
    input: ["text", "image"] as const,
    contextWindow: 1048576,
    maxTokens: 8192,
  },
  {
    id: "gemini-2.0-flash-exp",
    name: "Gemini 2.0 Flash (Antigravity)",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 1048576,
    maxTokens: 8192,
  },
  {
    id: "gemini-exp-1206",
    name: "Gemini Exp 1206 (Antigravity)",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 2097152,
    maxTokens: 8192,
  },
] as const;

// Claude 模型定义
const CLAUDE_MODELS = [
  {
    id: "claude-opus-4-5-thinking",
    name: "Claude Opus 4.5 Thinking",
    reasoning: true,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 16384,
  },
  {
    id: "claude-opus-4-5",
    name: "Claude Opus 4.5",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 16384,
  },
  {
    id: "claude-sonnet-4-5",
    name: "Claude Sonnet 4.5",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 8192,
  },
  {
    id: "claude-sonnet-4",
    name: "Claude Sonnet 4",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 8192,
  },
  {
    id: "claude-3-5-sonnet-20241022",
    name: "Claude 3.5 Sonnet",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 8192,
  },
  {
    id: "claude-3-5-haiku-20241022",
    name: "Claude 3.5 Haiku",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 8192,
  },
] as const;

// OpenAI 模型定义
const OPENAI_MODELS = [
  {
    id: "o1",
    name: "GPT-o1",
    reasoning: true,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 100000,
  },
  {
    id: "o1-mini",
    name: "GPT-o1 Mini",
    reasoning: true,
    input: ["text", "image"] as const,
    contextWindow: 128000,
    maxTokens: 65536,
  },
  {
    id: "o3-mini",
    name: "GPT-o3 Mini",
    reasoning: true,
    input: ["text", "image"] as const,
    contextWindow: 200000,
    maxTokens: 100000,
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 128000,
    maxTokens: 16384,
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 128000,
    maxTokens: 16384,
  },
] as const;

// Gemini 模型定义
const GEMINI_MODELS = [
  {
    id: "gemini-2.0-flash-thinking-exp-01-21",
    name: "Gemini 2.0 Flash Thinking",
    reasoning: true,
    input: ["text", "image"] as const,
    contextWindow: 1048576,
    maxTokens: 8192,
  },
  {
    id: "gemini-2.0-flash-exp",
    name: "Gemini 2.0 Flash",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 1048576,
    maxTokens: 8192,
  },
  {
    id: "gemini-exp-1206",
    name: "Gemini Exp 1206",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 2097152,
    maxTokens: 8192,
  },
  {
    id: "gemini-1.5-pro-002",
    name: "Gemini 1.5 Pro",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 2097152,
    maxTokens: 8192,
  },
  {
    id: "gemini-1.5-flash-002",
    name: "Gemini 1.5 Flash",
    reasoning: false,
    input: ["text", "image"] as const,
    contextWindow: 1048576,
    maxTokens: 8192,
  },
] as const;

function buildModelDefinition(params: {
  readonly id: string;
  readonly name: string;
  readonly reasoning: boolean;
  readonly input: readonly ("text" | "image")[];
  readonly contextWindow: number;
  readonly maxTokens: number;
}) {
  return {
    id: params.id,
    name: params.name,
    reasoning: params.reasoning,
    input: [...params.input],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: params.contextWindow,
    maxTokens: params.maxTokens,
  };
}

const aicodeWithPlugin = {
  id: "clawdbot-aicodewith-auth",
  name: "AICodewith Auth",
  description: "AICodewith provider for Claude, OpenAI, and Gemini models",
  configSchema: emptyPluginConfigSchema(),
  register(api: any) {
    // 注册 Claude 提供商
    api.registerProvider({
      id: "aicodewith-claude",
      label: "AICodewith Claude",
      docsPath: "/providers/aicodewith",
      aliases: ["aicodewith-claude"],
      auth: [
        {
          id: "api-key",
          label: "API Key",
          hint: "Enter your AICodewith API key",
          kind: "api_key",
          run: async (ctx: any) => {
            const apiKey = await ctx.prompter.text({
              message: "Enter your AICodewith API key:",
              validate: (value: any) => {
                if (!value || value.trim().length === 0) {
                  return "API key is required";
                }
                return undefined;
              },
            });

            const profileId = "aicodewith-claude:default";

            return {
              profiles: [
                {
                  profileId,
                  credential: {
                    type: "api_key",
                    provider: "aicodewith-claude",
                    apiKey: String(apiKey).trim(),
                  },
                },
              ],
              configPatch: {
                models: {
                  providers: {
                    "aicodewith-claude": {
                      baseUrl: AICODEWITH_BASE_URL,
                      apiKey: String(apiKey).trim(),
                      api: "anthropic",
                      models: CLAUDE_MODELS.map((m) => buildModelDefinition(m)),
                    },
                  },
                },
                agents: {
                  defaults: {
                    models: {
                      "aicodewith-claude/claude-sonnet-4-5": { alias: "claude" },
                      "aicodewith-claude/claude-opus-4-5-thinking": {},
                      "aicodewith-claude/claude-opus-4-5": {},
                      "aicodewith-claude/claude-sonnet-4": {},
                      "aicodewith-claude/claude-3-5-sonnet-20241022": {},
                      "aicodewith-claude/claude-3-5-haiku-20241022": {},
                    },
                  },
                },
              },
              defaultModel: "aicodewith-claude/claude-sonnet-4-5",
              notes: [
                "AICodewith Claude models are now configured.",
                "Default model set to: claude-sonnet-4-5",
                "To keep your current model, run: clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1",
              ],
            };
          },
        },
      ],
    });

    // 注册 OpenAI 提供商
    api.registerProvider({
      id: "aicodewith-openai",
      label: "AICodewith OpenAI",
      docsPath: "/providers/aicodewith",
      aliases: ["aicodewith-openai", "aicodewith-gpt"],
      auth: [
        {
          id: "api-key",
          label: "API Key",
          hint: "Enter your AICodewith API key",
          kind: "api_key",
          run: async (ctx: any) => {
            const apiKey = await ctx.prompter.text({
              message: "Enter your AICodewith API key:",
              validate: (value: any) => {
                if (!value || value.trim().length === 0) {
                  return "API key is required";
                }
                return undefined;
              },
            });

            const profileId = "aicodewith-openai:default";

            return {
              profiles: [
                {
                  profileId,
                  credential: {
                    type: "api_key",
                    provider: "aicodewith-openai",
                    apiKey: String(apiKey).trim(),
                  },
                },
              ],
              configPatch: {
                models: {
                  providers: {
                    "aicodewith-openai": {
                      baseUrl: AICODEWITH_BASE_URL,
                      apiKey: String(apiKey).trim(),
                      api: "openai-completions",
                      models: OPENAI_MODELS.map((m) => buildModelDefinition(m)),
                    },
                  },
                },
                agents: {
                  defaults: {
                    models: {
                      "aicodewith-openai/gpt-4o": { alias: "gpt" },
                      "aicodewith-openai/o1": {},
                      "aicodewith-openai/o1-mini": {},
                      "aicodewith-openai/o3-mini": {},
                      "aicodewith-openai/gpt-4o-mini": {},
                    },
                  },
                },
              },
              defaultModel: "aicodewith-openai/gpt-4o",
              notes: [
                "AICodewith OpenAI models are now configured.",
                "Default model set to: gpt-4o",
                "To keep your current model, run: clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1",
              ],
            };
          },
        },
      ],
    });

    // 注册 Gemini 提供商
    api.registerProvider({
      id: "aicodewith-gemini",
      label: "AICodewith Gemini",
      docsPath: "/providers/aicodewith",
      aliases: ["aicodewith-gemini"],
      auth: [
        {
          id: "api-key",
          label: "API Key",
          hint: "Enter your AICodewith API key",
          kind: "api_key",
          run: async (ctx: any) => {
            const apiKey = await ctx.prompter.text({
              message: "Enter your AICodewith API key:",
              validate: (value: any) => {
                if (!value || value.trim().length === 0) {
                  return "API key is required";
                }
                return undefined;
              },
            });

            const profileId = "aicodewith-gemini:default";

            return {
              profiles: [
                {
                  profileId,
                  credential: {
                    type: "api_key",
                    provider: "aicodewith-gemini",
                    apiKey: String(apiKey).trim(),
                  },
                },
              ],
              configPatch: {
                models: {
                  providers: {
                    "aicodewith-gemini": {
                      baseUrl: AICODEWITH_BASE_URL,
                      apiKey: String(apiKey).trim(),
                      api: "openai-completions",
                      models: GEMINI_MODELS.map((m) => buildModelDefinition(m)),
                    },
                  },
                },
                agents: {
                  defaults: {
                    models: {
                      "aicodewith-gemini/gemini-2.0-flash-exp": { alias: "gemini" },
                      "aicodewith-gemini/gemini-2.0-flash-thinking-exp-01-21": {},
                      "aicodewith-gemini/gemini-exp-1206": {},
                      "aicodewith-gemini/gemini-1.5-pro-002": {},
                      "aicodewith-gemini/gemini-1.5-flash-002": {},
                    },
                  },
                },
              },
              defaultModel: "aicodewith-gemini/gemini-2.0-flash-exp",
              notes: [
                "AICodewith Gemini models are now configured.",
                "Default model set to: gemini-2.0-flash-exp",
                "To keep your current model, run: clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1",
              ],
            };
          },
        },
      ],
    });

    // 注册 Google Antigravity 提供商（通过 AICodewith）
    api.registerProvider({
      id: "aicodewith-antigravity",
      label: "AICodewith Antigravity",
      docsPath: "/providers/aicodewith",
      aliases: ["aicodewith-antigravity", "antigravity"],
      auth: [
        {
          id: "api-key",
          label: "API Key",
          hint: "Enter your AICodewith API key",
          kind: "api_key",
          run: async (ctx: any) => {
            const apiKey = await ctx.prompter.text({
              message: "Enter your AICodewith API key:",
              validate: (value: any) => {
                if (!value || value.trim().length === 0) {
                  return "API key is required";
                }
                return undefined;
              },
            });

            const profileId = "aicodewith-antigravity:default";

            return {
              profiles: [
                {
                  profileId,
                  credential: {
                    type: "api_key",
                    provider: "aicodewith-antigravity",
                    apiKey: String(apiKey).trim(),
                  },
                },
              ],
              configPatch: {
                models: {
                  providers: {
                    "aicodewith-antigravity": {
                      baseUrl: AICODEWITH_BASE_URL,
                      apiKey: String(apiKey).trim(),
                      api: "anthropic",
                      models: ANTIGRAVITY_MODELS.map((m) => buildModelDefinition(m)),
                    },
                  },
                },
                agents: {
                  defaults: {
                    models: {
                      "aicodewith-antigravity/claude-opus-4-5-thinking": { alias: "antigravity" },
                      "aicodewith-antigravity/claude-opus-4-5": {},
                      "aicodewith-antigravity/claude-sonnet-4-5": {},
                      "aicodewith-antigravity/claude-sonnet-4": {},
                      "aicodewith-antigravity/gemini-2.0-flash-thinking-exp-01-21": {},
                      "aicodewith-antigravity/gemini-2.0-flash-exp": {},
                      "aicodewith-antigravity/gemini-exp-1206": {},
                    },
                  },
                },
              },
              defaultModel: "aicodewith-antigravity/claude-opus-4-5-thinking",
              notes: [
                "AICodewith Antigravity models are now configured.",
                "Default model set to: claude-opus-4-5-thinking",
                "To keep your current model, run: clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1",
              ],
            };
          },
        },
      ],
    });
  },
};

export default aicodeWithPlugin;
