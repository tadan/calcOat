/**
 * Format a number with appropriate decimal places and thousands separators
 */
export function formatNumber(value: number | string, decimals: number = 1): string {
  // Convert to number if it's a string
  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  // Handle invalid numbers
  if (isNaN(numValue)) {
    return '0';
  }

  if (numValue >= 1000000) {
    return `${(numValue / 1000000).toFixed(decimals)}M`;
  }
  if (numValue >= 1000) {
    return `${(numValue / 1000).toFixed(decimals)}K`;
  }
  return numValue.toFixed(decimals);
}

/**
 * Format impact value with unit
 */
export function formatImpact(value: number, unit: string): string {
  return `${formatNumber(value)} ${unit}`;
}

/**
 * Convert metric category to display label
 */
export function getCategoryLabel(category: "carbon" | "water" | "land"): string {
  const labels = {
    carbon: "CO₂ SAVED",
    water: "WATER SAVED",
    land: "LAND SAVED",
  };
  return labels[category];
}

/**
 * Get unit for metric category
 */
export function getCategoryUnit(category: "carbon" | "water" | "land"): string {
  const units = {
    carbon: "kg CO₂",
    water: "liters",
    land: "m²",
  };
  return units[category];
}
