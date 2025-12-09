// Add or update this file

export const ADMIN_DISCORD_IDS = ['321004302661451776', '', '']; // Add all admin Discord IDs here

export function isAdmin(discordId: string | undefined): boolean {
  return !!discordId && ADMIN_DISCORD_IDS.includes(discordId);
}

