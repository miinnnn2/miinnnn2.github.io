import { NextResponse } from 'next/server';
import { EXPERIENCES } from '@shared/config/experiences';

export async function GET() {
  return NextResponse.json({ experiences: EXPERIENCES });
}
