CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(50) DEFAULT 'user' NOT NULL,
	"created_at" varchar NOT NULL,
	"updated_at" varchar NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
