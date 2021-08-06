# Express.js Example REST API

This project was created for the purpose of learning how to develop REST APIs in `Express.js`.

## What does it do?

In short, there are user accounts & their are dictionary words. Words over a certain length may only be accessed by users. Some words are so long that they may only be accessed by privileged users.

## What words does it have?

A public domain English dictionary dump, found at the following link:

https://sourceforge.net/projects/mysqlenglishdictionary/

The SQL dump is in this repo at `./sql/entries.sql`. Just under 16MB!

## What tech does it use?

It's (probably) going to use the following:

- TypeScript
- Express.js for routing
- MySQL
- TypeORM
- Passport for authentication (`passport-local`)

And probably more.
