import { EventProps } from "@/app/events/[event]/page";
import { Round } from "@/shared/types/round";
import { ParticipantsTitle } from "@/components/participants-title";
import { RoundsList } from "@/components";
import { ParticipantsSubTitle } from "@/components/participants-sub-title";

export default function Participants({ params }: EventProps) {
  return (
    <section className="font-sans">
      <ParticipantsSubTitle>
        Code in The Dark {params.event}
      </ParticipantsSubTitle>
      <ParticipantsTitle>Gerenciar Chave</ParticipantsTitle>
      <RoundsList rounds={rounds} />
    </section>
  );
}

const rounds: Round[] = [
  {
    participants: [
      {
        id: 1,
        avatarUrl: "https://avatars.githubusercontent.com/u/487669?v=4",
        name: "Fernando Daciuk",
      },
      {
        id: 2,
        avatarUrl: "https://avatars.githubusercontent.com/u/28938150?v=4",
        name: "Pablo Pinheiro",
      },
      {
        id: 3,
        avatarUrl: "https://avatars.githubusercontent.com/u/487669?v=4",
        name: "Fernando Daciuk",
      },
      {
        id: 4,
        avatarUrl: "https://avatars.githubusercontent.com/u/28938150?v=4",
        name: "Pablo Pinheiro",
      },
    ],
  },
  {
    participants: [
      {
        id: 5,
        avatarUrl: "https://avatars.githubusercontent.com/u/487669?v=4",
        name: "Fernando Daciuk",
      },
      {
        id: 6,
        avatarUrl: "https://avatars.githubusercontent.com/u/28938150?v=4",
        name: "Pablo Pinheiro",
      },
      {
        id: 7,
        avatarUrl: "https://avatars.githubusercontent.com/u/487669?v=4",
        name: "Fernando Daciuk",
      },
      {
        id: 8,
        avatarUrl: "https://avatars.githubusercontent.com/u/28938150?v=4",
        name: "Pablo Pinheiro",
      },
    ],
  },
  {
    participants: [
      {
        id: 9,
        avatarUrl: "https://avatars.githubusercontent.com/u/487669?v=4",
        name: "Fernando Daciuk",
      },
      {
        id: 10,
        avatarUrl: "https://avatars.githubusercontent.com/u/28938150?v=4",
        name: "Pablo Pinheiro",
      },
      {
        id: 11,
        avatarUrl: "https://avatars.githubusercontent.com/u/487669?v=4",
        name: "Fernando Daciuk",
      },
      {
        id: 12,
        avatarUrl: "https://avatars.githubusercontent.com/u/28938150?v=4",
        name: "Pablo Pinheiro",
      },
    ],
  },
  {
    participants: [
      {
        id: 13,
        avatarUrl: "https://avatars.githubusercontent.com/u/487669?v=4",
        name: "Fernando Daciuk",
      },
      {
        id: 14,
        avatarUrl: "https://avatars.githubusercontent.com/u/28938150?v=4",
        name: "Pablo Pinheiro",
      },
      {
        id: 15,
        avatarUrl: "https://avatars.githubusercontent.com/u/487669?v=4",
        name: "Fernando Daciuk",
      },
      {
        id: 16,
        avatarUrl: "https://avatars.githubusercontent.com/u/28938150?v=4",
        name: "Pablo Pinheiro",
      },
    ],
  },
];
