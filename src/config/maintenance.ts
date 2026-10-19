/**
 * EXPRESS RIDE & SAFARI — MAINTENANCE CONFIGURATION
 *
 * Maintenance Mode Switch:
 * - When `true`: Displays the premium under-maintenance experience.
 * - When `false`: Instantly restores the full live public-facing website.
 *
 * To toggle OFF maintenance mode:
 * 1. Change `MAINTENANCE_MODE = false;` below, OR
 * 2. Set environment variable `NEXT_PUBLIC_MAINTENANCE_MODE=false`.
 */

export const MAINTENANCE_MODE: boolean =
  process.env.NEXT_PUBLIC_MAINTENANCE_MODE !== 'false' && true;


