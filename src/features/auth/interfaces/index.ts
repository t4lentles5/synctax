import z from 'zod';

export const registerSchema = z.object({
  email: z.email(),
  fullname: z.string().min(3).max(20),
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9._]+$/),
  password: z.string().min(6),
  confirm_password: z.string().min(6),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
