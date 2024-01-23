import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import { sanityClient } from 'sanity:client';
import { schemaTypes } from './schemas/index.ts';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';

const { projectId, dataset } = sanityClient.config();

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
  studioBasePath: '/admin',
  
  schema: {
    types: schemaTypes,
  },
})
  