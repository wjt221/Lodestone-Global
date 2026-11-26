# Shared ecosystem website

Lodestone Global is the master repository. All four business paths and their subpages are included in one Next.js app. The shared navigation and content live in lib/ecosystem-content.ts; About Us and Contact are shared routes. The Header selects the active business from the route or explicit brand on the practice page.

Root paths are rewritten by middleware for the approved business hostnames. For a separate deployment of the identical codebase, set NEXT_PUBLIC_LODESTONE_FRONT_DOOR to e3, capital or lfa (unset for Global). Internal links stay on the originating domain. Keep the same source commit across repositories to avoid drift.

No production DNS changes are part of this rebuild. noindex remains until approved cutover. Review LFA disclosures against the final filed ADV, confirm fund status/eligibility, review all photography and team roster, and test all routes and the contact workflow before public launch.
