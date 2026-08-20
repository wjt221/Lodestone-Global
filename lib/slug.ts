/**
 * Stable anchor id for a capability heading.
 *
 * Lives in lib/ rather than in CapabilityStepper because that component is a
 * client component: a function exported from it cannot be called during server
 * rendering, which is exactly what the homepage's board doors need to do.
 */
export function slugifyCapability(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
