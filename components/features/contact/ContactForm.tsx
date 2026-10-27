"use client";

// START FORM IMPORTS - This group need to be: npm install zod @hookform/resolvers react-hook-form
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
// ============================ END

import { Section } from "@/components/common/Section";

// ShadCN Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea, } from "@/components/ui/input-group";
import { Send, Mail, Phone, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z.string().email({ message: "Invalid email address." }),
	subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
	message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be at most 500 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
			},
		});

	const onSubmit = async (data: FormData) => {
		try {
			const response = await fetch("https://formsubmit.co/ajax/zachabellar03@gmail.com", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					name: data.name,
					email: data.email,
					subject: data.subject,
					message: data.message,
					_subject: `New Portfolio Message from ${data.name}: ${data.subject}`,
					_template: "table",
					_captcha: "false",
				}),
			});

			const result = await response.json();

			if (response.ok && (result.success === "true" || result.success === true || result.message)) {
				toast.success("Message sent successfully! I'll get back to you soon.");
				form.reset();
			} else {
				throw new Error(result.message || "Failed to send message.");
			}
		} catch (error) {
			console.error("Submission error:", error);
			// Fallback: open default mail client pre-filled
			const mailtoUrl = `mailto:zachabellar03@gmail.com?subject=${encodeURIComponent(
				`Portfolio Inquiry: ${data.subject}`
			)}&body=${encodeURIComponent(
				`Hi Zach,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
			)}`;
			window.location.href = mailtoUrl;
			toast.success("Opening your email client to send your message!");
		}
	};

	return (
		<Section id="contact" className="min-h-screen">
			<div className="grid lg:grid-cols-2 lg:gap-24 gap-12 items-center">

				<Card className="w-full">
					<CardHeader>
						<CardTitle>Contact Me</CardTitle>
						<CardDescription>
							Fill out the form below to send me a message.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
							<FieldGroup	>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Controller
										name="name"
										control={form.control}
										render={({ field, fieldState }) => (
											<Field data-invalid={fieldState.invalid}>
												<FieldLabel htmlFor="name">Name</FieldLabel>
												<Input
													{...field}
													id="name"
													aria-invalid={fieldState.invalid}
													placeholder="John Doe"
													autoComplete="name"
												/>
												{fieldState.invalid && (
													<FieldError errors={[fieldState.error]} />
												)}
											</Field>
										)}
									/>
									<Controller
										name="email"
										control={form.control}
										render={({ field, fieldState }) => (
											<Field data-invalid={fieldState.invalid}>
												<FieldLabel htmlFor="email">Email</FieldLabel>
												<Input
													{...field}
													id="email"
													type="email"
													aria-invalid={fieldState.invalid}
													placeholder="john@example.com"
													autoComplete="email"
												/>
												{fieldState.invalid && (
													<FieldError errors={[fieldState.error]} />
												)}
											</Field>
										)}
									/>
								</div>

								<Controller
									name="subject"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor="subject">Subject</FieldLabel>
											<Input
												{...field}
												id="subject"
												aria-invalid={fieldState.invalid}
												placeholder="Project Inquiry"
											/>
											{fieldState.invalid && (
												<FieldError errors={[fieldState.error]} />
											)}
										</Field>
									)}
								/>

								<Controller
									name="message"
									control={form.control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor="message">Message</FieldLabel>
											<InputGroup>
												<InputGroupTextarea
													{...field}
													id="message"
													placeholder="Tell me about your project..."
													rows={6}
													className="min-h-24 resize-none"
													aria-invalid={fieldState.invalid}
												/>
												<InputGroupAddon align="block-end">
													<InputGroupText className="tabular-nums">
														{field.value.length}/500 characters
													</InputGroupText>
												</InputGroupAddon>
											</InputGroup>
											{fieldState.invalid && (
												<FieldError errors={[fieldState.error]} />
											)}
										</Field>
									)}
								/>
							</FieldGroup>
						</form>
					</CardContent>
					<CardFooter>
						<Button type="submit" form="contact-form" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
							{form.formState.isSubmitting ? "Sending..." : "Send Message"}
						</Button>
					</CardFooter>
				</Card>

                <div className="space-y-8">
					<div className="space-y-4">
						<p className="text-sm font-semibold uppercase tracking-widest text-primary">
							Contact
						</p>
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
							Let&apos;s work together
						</h1>
						<p className="text-muted-foreground md:text-lg/relaxed">
							Have a project in mind or just want to chat? Fill out the form or
							reach out directly. I&apos;m always open to discussing new
							projects, creative ideas, or opportunities.
						</p>
					</div>

					<div className="space-y-4">
						<a
							href="mailto:zachabellar03@gmail.com"
							className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/40"
						>
							<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
								<Mail className="h-5 w-5" />
							</span>
							<div>
								<p className="text-sm font-medium">Email</p>
								<p className="text-sm text-muted-foreground">zachabellar03@gmail.com</p>
							</div>
						</a>
						<a
							href="tel:09519333653"
							className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/40"
						>
							<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
								<Phone className="h-5 w-5" />
							</span>
							<div>
								<p className="text-sm font-medium">Phone</p>
								<p className="text-sm text-muted-foreground">0951 933 3653</p>
							</div>
						</a>
					</div>

					<div className="flex gap-3 pt-2">
						{[
							{ href: "https://github.com", label: "GitHub", icon: Github },
							{ href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
						].map(({ href, label, icon: Icon }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={label}
								className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
							>
								<Icon className="h-4 w-4" />
							</a>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
