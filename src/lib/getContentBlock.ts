import { sanityClient } from 'sanity:client';
import groq from 'groq';
import type { Image, Slug } from '@sanity/types';
import type { PortableTextBlock } from "@portabletext/types";


interface ContentBlock {
  _id: string;
  _type: 'contentBlock';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  title: string;
  content: PortableTextBlock;
  image: Image;
  slug: Slug;
}

async function getContentBlocks() {

  return await sanityClient.fetch<ContentBlock[]>(groq`
  *[_type == "contentBlock"]
`);
}



export default getContentBlocks;
export type { ContentBlock };