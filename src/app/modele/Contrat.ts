import { Agent } from './Agent';
import { Client } from './client';
import { BienImmobilier } from './BienImmobilier';

export class Contrat {
    refContrat: number;
    client: Client;
    bienImmo: BienImmobilier;
    agent: Agent;
}