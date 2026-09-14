import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const categoria = searchParams.get('categoria')
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '20'), 100)

  let query = supabase
    .from('articoli')
    .select('id, titolo, slug, categoria, stato, created_at, excerpt')
    .eq('stato', 'published')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (categoria) {
    query = query.eq('categoria', categoria)
  }

  const { data, error } = await query

  if (error) {
    console.error('[articoli] Supabase error:', error.message)
    return NextResponse.json({ error: 'Errore recupero articoli' }, { status: 500 })
  }

  return NextResponse.json({ articoli: data ?? [] }, {
    headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=600' },
  })
}
