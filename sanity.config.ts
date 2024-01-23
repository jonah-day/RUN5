import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import { sanityClient } from 'sanity:client';
import { schemaTypes } from './schemas/index.ts';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';

// const { projectId, dataset } = sanityClient.config();

const projectId =
  import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID! ||
  import.meta.env.PUBLIC_SANITY_PROJECT_ID!;
const dataset =
  import.meta.env.PUBLIC_SANITY_STUDIO_DATASET! ||
  import.meta.env.PUBLIC_SANITY_DATASET!;

if (!projectId || !dataset)
  throw new Error(
    'projectId and/or dataset not set',
  );

export default defineConfig({
  name: 'default',
  title: 'RUN5',
  projectId,
  dataset,
  plugins: [
    deskTool(),
    visionTool(),
    vercelDeployTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
  