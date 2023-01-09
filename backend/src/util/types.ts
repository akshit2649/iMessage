import { Prisma, PrismaClient } from "@prisma/client";
import { ISODateString } from "next-auth";
import {
  conversationPopulated,
  participantPopulated,
} from "../graphql/resolvers/conversation";
import { Context } from "graphql-ws/lib/server";
import { PubSub } from "graphql-subscriptions";

export interface GraphQLContext {
  session: Session | null;
  prisma: PrismaClient;
  pubsub: PubSub;
}

//Server configuration
export interface Session {
  user?: User;
  expires: ISODateString;
}

export interface SubscriptionContext extends Context {
  connectionParams: {
    session?: Session;
  };
}

// Users
export interface User {
  id: string;
  username: string;
  image: string;
  email: string;
  name: string;
  emailVerified: boolean;
}

export interface CreateUsernameResponse {
  success?: boolean;
  error?: string;
}

//Conversation
export type ConversationPopulated = Prisma.ConversationGetPayload<{
  include: typeof conversationPopulated;
}>;

export type ParticipantPopulated = Prisma.ConversationParticipantGetPayload<{
  include: typeof participantPopulated;
}>;
