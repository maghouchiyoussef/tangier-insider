// Fetch Tangier's current weather once per build (shared by every page), from MET Norway.
export type WeatherNow = { temp: number; symbol: string; time: Date };

let cached: Promise<WeatherNow | null> | undefined;

export function getWeather(): Promise<WeatherNow | null> {
  cached ??= (async () => {
    try {
      const res = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=35.77&lon=-5.81', {
        headers: { 'User-Agent': 'TangierInsider/1.0 https://tangierinsider.com contact@tangierinsider.com' },
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) return null;
      const data = await res.json();
      const now = data.properties.timeseries[0];
      return {
        temp: Math.round(now.data.instant.details.air_temperature),
        symbol: now.data.next_1_hours?.summary?.symbol_code ?? now.data.next_6_hours?.summary?.symbol_code ?? '',
        time: new Date(now.time),
      };
    } catch {
      return null;
    }
  })();
  return cached;
}
