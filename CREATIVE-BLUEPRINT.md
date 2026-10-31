# Luvvent Events — Creative blueprint

## Direction
Traditional Indian wedding hospitality with an editorial finish. The emotional thread is the moment before: lamps being lit, a dupatta being adjusted, the room waiting for its people. The uploaded logo and its purple colour remain intact. Do not replace it with generic lettering. The tagline is **From Vision to Reality**.

Verified source: the supplied agency poster lists event planning, wedding planning, corporate event organisation, photography, videography and entertainment; phone **090902 19319**; customer-focused approach and quality-driven service. No founder names, client stories, awards, addresses, price lists or international commissions were supplied. Do not invent them. International standard is an aesthetic goal, not a track-record claim.

## Design system
- Heirloom ivory #F6F0E5; ink #32251F; sindoor/oxblood #681F2C; antique brass #8B683A; marigold #D9A23B. Logo retains its supplied purple.
- Georgia serif display with italic accents; system sans-serif for navigation, labels and body. Local font stack: no remote font requests. Display 56–104px desktop and 44–68px mobile; body 17–19px, line height 1.7.
- Desktop: max-width 1440px, 64px outer gutters, 12-column conceptual grid. Mobile: one column, 22px gutters, 44px minimum main controls.
- Navigation: Home / About / Services / Gallery / Our Process / Contact Us. The footer provides access to all 18 pages. Services adds a dedicated directory.
- Image direction: Indian palace architecture, mandap proportions, marigold, jasmine, brass diyas, fabric and hands preparing rituals. Avoid decorative misuse of religious imagery. Family and officiant decide ceremony requirements.
- Current site uses an original vector palace illustration, not stock photography and not past-event evidence. Three gallery studies are explicitly labelled concepts. Replace them only with cleared, accurately captioned event material.
- Motion: 650ms opacity and 14px rise as sections enter view; subtle 3% image scale on hover; no sound, autoplay, cursor effects or forced scrolling. Respect reduced-motion preferences.
- Conversion: one clear enquiry action per section. No fake scarcity, membership screening, invented testimonials or status claims. Phone always available.

## Shared wireframe
Desktop: [logo | navigation | enquiry] → [editorial hero 52% | illustrated scene 48%] → [chapter sections] → [invitation] → [18-page directory footer].
Mobile: [logo | Menu] → [headline + intro + CTA] → [scene] → [single-column chapters] → [invitation] → [footer].

## Global interactions
Menu toggles with keyboard support, Escape closes and returns focus. Active page uses aria-current. Main content has a skip link. FAQ uses native details/summary. Privacy notice is a native modal dialog. Contact uses two steps, browser validation, a review state and an explicit WhatsApp handoff; no automatic sending or misleading success state. Nothing is stored by this static site.

## Art and production prompts
For future photography, commission real venues and real celebrations with written permission. Direction: warm available light, restrained editorial compositions, traditional textiles rendered accurately, authentic family gestures, generous negative space for headlines. Avoid inventing recognisable past commissions. Shoot horizontal and vertical crops. BTS sequence: empty room → hands preparing details → final light check → doors opening. Use portraits only with appropriate consent.

## Page-by-page copy and wireframes

# 01. Home
Route: `index.html`

## Hero — Luvvent Events · From Vision to Reality
**Headline:** Before the first / shubh moment.

**Subheading/body:** The lamps are lit. The jasmine is fresh. Somewhere beyond the doors, your favourite people are arriving. Let the celebration begin.

**Visual:** Full-height split hero: oversized serif left, Indian palace and diya illustration right. A fine gold arch frames anticipation.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → The manifesto → The celebrations → The invitation to imagine → The first conversation → directory footer.

## The manifesto
**Headline:** Some moments deserve / the whole world to pause.

**Body copy:** A wedding is never just one evening. It is the quiet blessing before the music rises. The hands that straighten a dupatta. The welcome that feels like coming home. At Luvvent Events, we bring planning, imagery and entertainment together around what matters to you.

**Visual / layout / imagery prompt:** Ivory editorial spread; oversized serif quotation beside an architectural jali panel. Gentle opacity reveal.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Meet Luvvent → about.html

## The celebrations
**Headline:** Many rituals. / One unmistakably yours.

**Body copy:** From the first colour of haldi to the last song at the reception, shape a celebration that carries your traditions and your personality in equal measure.

**Visual / layout / imagery prompt:** Three asymmetric arch-framed links for haldi, sangeet and wedding day. Hover underline; no autoplay.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore wedding planning → weddings.html

## The invitation to imagine
**Headline:** An evening, / before it becomes a memory.

**Body copy:** Explore our visual studies in colour, light and atmosphere. Each is an invitation to imagine your own celebration—not a claim of a past commission.

**Visual / layout / imagery prompt:** Wide illustrated palace scene followed by a numbered editorial gallery teaser. Slow transform on hover.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Enter the gallery → gallery.html

## The first conversation
**Headline:** Tell us what / you are dreaming of.

**Body copy:** A date. A place. A feeling you cannot quite put into words. That is enough to begin.

**Visual / layout / imagery prompt:** Sindoor panel, fine gold rules and one clear ivory call to action.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Begin your celebration → contact.html

# 02. About
Route: `about.html`

## Hero — The people behind the anticipation
**Headline:** Your traditions. / Our full attention.

**Subheading/body:** Based in Hyderabad, Luvvent Events brings event planning, wedding planning, corporate organisation, photography, videography and entertainment into one considered conversation.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → Our philosophy → Our promise → Cultural care → directory footer.

## Our philosophy
**Headline:** Meaning before spectacle.

**Body copy:** The most memorable celebrations feel personal before they look beautiful. We begin with your people, your rituals and the way you want the room to feel. Then we shape the details around them.

**Visual / layout / imagery prompt:** Split spread with large 01 numeral and intimate illustrated diya still life.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** See our approach → process.html

## Our promise
**Headline:** A thoughtful host / behind every detail.

**Body copy:** Customer-focused planning means listening carefully, explaining choices clearly and keeping the celebration connected to your priorities. Quality-driven service means taking the preparation as seriously as the occasion.

**Visual / layout / imagery prompt:** Two generous text columns divided by a hairline gold rule.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore our services → services.html

## Cultural care
**Headline:** Tradition is personal. / We treat it that way.

**Body copy:** No two families celebrate in exactly the same way. Share the customs, languages, accessibility needs and family considerations that matter to you. We build the conversation around your version of the occasion.

**Visual / layout / imagery prompt:** Full-width crimson close, with small jasmine-inspired ornament.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Introduce your celebration → contact.html

# 03. Services
Route: `services.html`

## Hero — The blueprint of a beautiful celebration
**Headline:** Every detail, / in conversation.

**Subheading/body:** Choose the planning, storytelling and atmosphere your occasion calls for. The scope is shaped with you, then confirmed in a bespoke proposal.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → 01 · Planning → 02 · Storytelling → 03 · Atmosphere → Your commission → directory footer.

## 01 · Planning
**Headline:** The complete celebration.

**Body copy:** For hosts who want a considered thread from first idea to final farewell. Wedding and event planning bring the creative direction, preparation and event-day coordination into one agreed scope.

**Visual / layout / imagery prompt:** Two large editorial panels for wedding and private-event planning.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore wedding planning → weddings.html

## 02 · Storytelling
**Headline:** The feeling, preserved.

**Body copy:** Photography and videography turn passing gestures into something you can return to: the breath before the entrance, the first embrace, the room just before it fills.

**Visual / layout / imagery prompt:** Film-strip rhythm, three illustrated frames and handwritten-style captions.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore photography & films → photography-films.html

## 03 · Atmosphere
**Headline:** Give the evening / its own heartbeat.

**Body copy:** Entertainment shapes anticipation into energy. Discuss music, performance and the flow of the evening as part of a celebration that feels like you. Corporate occasions receive the same attention to purpose and presence.

**Visual / layout / imagery prompt:** Dark stage-inspired band with concentric gold linework.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore entertainment → entertainment.html

## Your commission
**Headline:** A scope built / around your occasion.

**Body copy:** Begin with full planning or discuss a focused combination of services. Deliverables, collaborators, venue requirements, fees and availability are agreed before booking. No standard package should decide how your celebration feels.

**Visual / layout / imagery prompt:** Plain-language scope panel with a single prominent enquiry action.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Request a bespoke proposal → contact.html

# 04. Wedding Planning
Route: `weddings.html`

## Hero — The wedding collection
**Headline:** A celebration / with roots. And wings.

**Subheading/body:** For the rituals you inherited, the people you love and the life you are about to begin.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → The family conversation → The wedding chapters → The preparation → directory footer.

## The family conversation
**Headline:** Begin with what / must be felt.

**Body copy:** Tell us about your families, your ceremonies and the moments you want to protect. We translate that conversation into a planning direction, an event sequence and a shared understanding of what matters most.

**Visual / layout / imagery prompt:** Two-column family-led narrative with a brass thali illustration.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Discover the countdown → process.html

## The wedding chapters
**Headline:** From haldi light / to reception glow.

**Body copy:** A joyful haldi. An intimate mehendi. A sangeet that lifts the room. A ceremony grounded in meaning. A reception that carries the night forward. Each chapter receives its own mood, while the celebration holds together.

**Visual / layout / imagery prompt:** Four numbered chapter links with warm colour transitions.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore the wedding rituals → haldi-mehendi.html

## The preparation
**Headline:** So you can arrive / fully in the moment.

**Body copy:** Discuss venue coordination, creative direction, vendor communication, guest flow and event-day responsibilities. The exact services and dependencies are documented in your proposal.

**Visual / layout / imagery prompt:** Quiet ivory close with an oversized arched outline.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Plan your wedding → contact.html

# 05. Haldi & Mehendi
Route: `haldi-mehendi.html`

## Hero — Rituals in colour
**Headline:** A little haldi. / A whole lot of heart.

**Subheading/body:** Sunlit laughter, henna-dark palms and the kind of afternoon that becomes a family story.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → Haldi → Mehendi → The personal details → directory footer.

## Haldi
**Headline:** Let the morning / wear marigold.

**Body copy:** Picture a courtyard washed in turmeric yellow, loose petals and a comfortable place for every generation to gather. We shape the setting and sequence around the customs your family follows.

**Visual / layout / imagery prompt:** Marigold palette; low seating and sunlit courtyard illustration.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** View the marigold study → experience-marigold.html

## Mehendi
**Headline:** The sweetest / kind of waiting.

**Body copy:** A slower rhythm. Music that travels between conversations. Thoughtful seating, gentle light and room for the bride to enjoy the gathering while the patterns take shape.

**Visual / layout / imagery prompt:** Jasmine-green accent and hand-drawn henna-inspired geometric detail.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore entertainment → entertainment.html

## The personal details
**Headline:** Make room / for your people.

**Body copy:** Share your guest mix, preferred rituals and practical needs. Artist arrangements, décor, refreshments and entertainment can be discussed and included where agreed.

**Visual / layout / imagery prompt:** Intimate invitation panel with one button and generous breathing room.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Shape your daytime celebration → contact.html

# 06. Sangeet & Reception
Route: `sangeet.html`

## Hero — When the room comes alive
**Headline:** One more song. / One unforgettable night.

**Subheading/body:** The lights lower. A familiar beat begins. Across the room, someone is already on their feet.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → The sangeet → The reception → The rhythm → directory footer.

## The sangeet
**Headline:** Every family / has its headline act.

**Body copy:** Build an evening around the performances, surprises and shared songs that belong to your people. We help shape the sequence so the excitement rises naturally.

**Visual / layout / imagery prompt:** Oxblood stage composition with a sweeping gold spotlight.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore entertainment → entertainment.html

## The reception
**Headline:** An entrance / worth waiting for.

**Body copy:** The first impression begins before you enter. Consider the arrival route, room reveal, lighting mood and pace of the evening as one continuous welcome.

**Visual / layout / imagery prompt:** Wide architectural reception scene; restrained reveal on scroll.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** View the midnight study → experience-midnight.html

## The rhythm
**Headline:** Leave space / for the unexpected joy.

**Body copy:** A considered running order gives the evening structure without making it feel rehearsed. Performance timings, speeches and production needs are discussed with the relevant teams.

**Visual / layout / imagery prompt:** Three typographic beats: Arrival / Reveal / Afterglow.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Begin planning your evening → contact.html

# 07. Private Celebrations
Route: `private-events.html`

## Hero — The art of gathering
**Headline:** For the occasion / only you could host.

**Subheading/body:** A milestone birthday. An anniversary. A family reunion. A reason to bring your favourite people into one beautiful room.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → The intention → The experience → The invitation → directory footer.

## The intention
**Headline:** Not bigger. / More personal.

**Body copy:** Begin with the person or moment at the heart of the gathering. From there, the mood, setting and sequence can be shaped into a celebration with its own character.

**Visual / layout / imagery prompt:** Intimate table setting illustration with candlelit gold accents.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore our process → process.html

## The experience
**Headline:** A welcome they / will feel immediately.

**Body copy:** Event planning, photography, videography and entertainment can come together around the scale and style of your occasion. The proposal defines exactly what is included.

**Visual / layout / imagery prompt:** Three spacious service rows with numbered markers.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Choose your services → services.html

## The invitation
**Headline:** Make the next / milestone yours.

**Body copy:** Tell us who you are celebrating, the atmosphere you imagine and the date you have in mind.

**Visual / layout / imagery prompt:** Cream invitation card on a deep red field.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Discuss a private celebration → contact.html

# 08. Corporate Events
Route: `corporate-events.html`

## Hero — Presence with purpose
**Headline:** A room that / understands your brand.

**Subheading/body:** For the launch, gathering or milestone where every arrival should feel intentional.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → The brief → The experience → The next move → directory footer.

## The brief
**Headline:** Start with / what the occasion must do.

**Body copy:** Introduce your audience, message and desired atmosphere. We shape an event-planning conversation around the purpose of the gathering and the impression you want it to leave.

**Visual / layout / imagery prompt:** Architectural grid and disciplined typography; gold accent only.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** See the planning process → process.html

## The experience
**Headline:** From first welcome / to final conversation.

**Body copy:** Corporate event organisation can bring programme flow, preparation, partner coordination and event-day responsibilities into an agreed plan. Photography, videography and entertainment can be discussed alongside it.

**Visual / layout / imagery prompt:** Three-stage timeline: Arrival / Programme / Connection.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore all services → services.html

## The next move
**Headline:** Let the occasion / speak clearly.

**Body copy:** Share your event type, guest estimate, location and key dates. We will use those details to begin the scoping conversation.

**Visual / layout / imagery prompt:** Minimal executive invitation; no unsupported client logos.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Discuss your corporate event → contact.html

# 09. Photography & Films
Route: `photography-films.html`

## Hero — The art of remembering
**Headline:** Before the pose. / There is the feeling.

**Subheading/body:** A held breath. A proud glance. The laughter just outside the frame. Photography and videography for the moments that make the occasion yours.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → Photography → Videography → The conversation → directory footer.

## Photography
**Headline:** The gestures / that say everything.

**Body copy:** Discuss the images you care about: family portraits, ceremonial details, candid exchanges and the atmosphere of the setting. Coverage, team composition and deliverables are agreed in advance.

**Visual / layout / imagery prompt:** Three editorial frame proportions; captions clarify concept artwork.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore the gallery direction → gallery.html

## Videography
**Headline:** Hear the evening / come back to life.

**Body copy:** A film can hold what a photograph cannot: a voice, a rhythm, the sound of a room responding together. Share your preferred storytelling style, then confirm coverage, edits and delivery timelines in your proposal.

**Visual / layout / imagery prompt:** Widescreen illustrated film still; no nonfunctional play button.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** See the midnight concept → experience-midnight.html

## The conversation
**Headline:** Tell us what / you want to remember.

**Body copy:** Let us know which ceremonies and people matter most, and how you imagine returning to the celebration in years to come.

**Visual / layout / imagery prompt:** Quiet full-width text with a small framed diya motif.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Discuss photography & films → contact.html

# 10. Entertainment
Route: `entertainment.html`

## Hero — The pulse of the celebration
**Headline:** You can feel it / before the first beat.

**Subheading/body:** The hush before a performance. The first note everyone knows. The moment an entire room becomes part of the evening.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → The mood → The sequence → Your evening → directory footer.

## The mood
**Headline:** Music with / a sense of occasion.

**Body copy:** Share the sounds you love, the traditions you want to honour and the energy you imagine. Artist options, technical requirements and availability are explored during scoping.

**Visual / layout / imagery prompt:** Gold sound-wave ornament on a rich red stage-inspired field.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore sangeet planning → sangeet.html

## The sequence
**Headline:** Build the anticipation. / Then let it rise.

**Body copy:** Ceremonial moments, family performances and dance-floor energy need different kinds of space. We discuss the programme as a whole so each moment has room to land.

**Visual / layout / imagery prompt:** Three vertical beats with a restrained reveal.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** See the countdown → process.html

## Your evening
**Headline:** What should / the room feel like?

**Body copy:** Intimate and acoustic. Joyful and traditional. A late-night celebration. Tell us where the evening should begin—and where you want it to go.

**Visual / layout / imagery prompt:** Invitation panel with three mood words set in large serif type.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Create the atmosphere → contact.html

# 11. Gallery
Route: `gallery.html`

## Hero — The gallery · Celebrations & inspiration
**Headline:** The setting. / The anticipation.

**Subheading/body:** Explore photographs from our Google business profile, followed by three separately labelled art-direction studies for your next celebration.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Behind the anticipation → process.html.

**Wireframe:** Header → hero → 01 · The Marigold Morning → 02 · The Royal Vow → 03 · The Midnight Mehfil → directory footer.

## 01 · The Marigold Morning
**Headline:** When sunlight / becomes a celebration.

**Body copy:** A courtyard haldi study in marigold, sandstone and fresh green. Explore the preparations before the first guest arrives.

**Visual / layout / imagery prompt:** Bright courtyard illustration; asymmetrical 60/40 image-to-copy composition.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Enter the marigold study → experience-marigold.html

## 02 · The Royal Vow
**Headline:** A ceremony / held in warm light.

**Body copy:** A mandap concept in heirloom ivory and antique gold, with an architectural sense of stillness.

**Visual / layout / imagery prompt:** Centred palace arches with repeated diya motifs.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Enter the royal study → experience-royal.html

## 03 · The Midnight Mehfil
**Headline:** The night / is just beginning.

**Body copy:** A reception study in sindoor red, candlelight and the promise of one more song.

**Visual / layout / imagery prompt:** Deep crimson panoramic stage illustration; generous editorial caption.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Enter the midnight study → experience-midnight.html

# 12. Marigold Morning
Route: `experience-marigold.html`

## Hero — Concept study 01 · Not a completed event
**Headline:** The Marigold / Morning.

**Subheading/body:** A haldi imagined as a sunlit family courtyard: tactile, joyful and unmistakably Indian.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → The palette → Before the guests → Make it yours → directory footer.

## The palette
**Headline:** Turmeric. Sandstone. / A breath of green.

**Body copy:** The concept uses warm yellow as an accent against soft architectural neutrals, allowing flowers, fabrics and the people in the room to carry the colour.

**Visual / layout / imagery prompt:** Palette swatches alongside a courtyard illustration; label all imagery concept artwork.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore haldi & mehendi → haldi-mehendi.html

## Before the guests
**Headline:** The quiet work / behind the colour.

**Body copy:** Imagine petals being placed, cushions finding their corners and the ceremonial space receiving a final check. A behind-the-scenes sequence would capture those preparations before the family arrives.

**Visual / layout / imagery prompt:** Triptych concept storyboard: petals / seating / final walkthrough.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Discover the process → process.html

## Make it yours
**Headline:** What does your / morning look like?

**Body copy:** Use this study as a starting point. Your rituals, venue and guest needs will shape the actual design.

**Visual / layout / imagery prompt:** Warm cream closing invitation with a yellow border.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Discuss your haldi → contact.html

# 13. The Royal Vow
Route: `experience-royal.html`

## Hero — Concept study 02 · Not a completed event
**Headline:** The Royal / Vow.

**Subheading/body:** An architectural wedding-ceremony concept in ivory, antique gold and the soft glow of diyas.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → The setting → The final hour → Your traditions → directory footer.

## The setting
**Headline:** Let the ritual / hold the room.

**Body copy:** An open, balanced mandap concept frames the ceremony without overwhelming it. Fine gold linework and pale textile layers give the setting warmth and a sense of proportion.

**Visual / layout / imagery prompt:** Symmetrical palace arch; still composition with no exaggerated animation.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore wedding planning → weddings.html

## The final hour
**Headline:** Everything in place. / A moment to breathe.

**Body copy:** A preparation storyboard would follow the light check, the placement of ceremonial elements and the final review of family access. Religious requirements are confirmed with the family and their chosen officiant.

**Visual / layout / imagery prompt:** Three annotated preparation frames with editorial labels.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore the countdown → process.html

## Your traditions
**Headline:** Bring your own / meaning to the mandap.

**Body copy:** The concept is a visual starting point. The final setting must respond to your customs, venue and agreed scope.

**Visual / layout / imagery prompt:** Ivory-on-crimson invitation beneath a fine mandap outline.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Begin your wedding conversation → contact.html

# 14. Midnight Mehfil
Route: `experience-midnight.html`

## Hero — Concept study 03 · Not a completed event
**Headline:** The Midnight / Mehfil.

**Subheading/body:** A reception concept for the moment the formalities soften and the whole room leans into the night.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → The atmosphere → The setup → Your night → directory footer.

## The atmosphere
**Headline:** Candlelight. Velvet. / The promise of music.

**Body copy:** Deep red surfaces and warm brass accents create a mood of intimacy at scale. The visual direction leaves room for expressive florals and a clear view of the stage.

**Visual / layout / imagery prompt:** Dark panoramic illustrated ballroom with gold pools of light.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore sangeet & reception → sangeet.html

## The setup
**Headline:** The last rehearsal / before the room is yours.

**Body copy:** Imagine a behind-the-scenes sequence following stage cues, a room-lighting check and the final arrival walkthrough. Any production design would be developed around the venue and technical requirements.

**Visual / layout / imagery prompt:** Alternating wide and close storyboard panels with minimal captions.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore entertainment → entertainment.html

## Your night
**Headline:** How should / the evening unfold?

**Body copy:** Bring the songs, the stories and the feeling you want your guests to take home. We can begin there.

**Visual / layout / imagery prompt:** Large serif invitation with a single gold-outlined action.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Discuss your reception → contact.html

# 15. Our Process
Route: `process.html`

## Hero — The countdown to the extraordinary
**Headline:** The beautiful part? / You get to be there.

**Subheading/body:** A considered sequence of conversations, decisions and final preparations—so the occasion feels like yours from the beginning.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → 01 · The first spark → 02 · The shared vision → 03 · The considered plan → 04 · The final countdown → directory footer.

## 01 · The first spark
**Headline:** Tell us / what matters.

**Body copy:** We begin with the occasion, your people, traditions, location, dates and priorities. Early conversations establish what you need and whether the brief is the right fit.

**Visual / layout / imagery prompt:** Oversized 01 marker on a fine vertical gold timeline.

**Animation:** Staggered vertical reading rhythm; 650ms entry fade with reduced-motion fallback.

**CTA:** Start the conversation → contact.html

## 02 · The shared vision
**Headline:** Give the feeling / a form.

**Body copy:** We explore creative direction and service scope. A bespoke proposal sets out agreed deliverables, fees, responsibilities and relevant terms before a booking is confirmed.

**Visual / layout / imagery prompt:** Mood-board style type block and palette strip; timeline continues.

**Animation:** Staggered vertical reading rhythm; 650ms entry fade with reduced-motion fallback.

**CTA:** Explore service options → services.html

## 03 · The considered plan
**Headline:** Make every / decision count.

**Body copy:** Once the commission is agreed, planning develops around the booked scope. Timelines, coordination points and outstanding decisions are kept connected to the needs of your occasion.

**Visual / layout / imagery prompt:** Editorial checklist with abundant spacing, no fabricated countdown dates.

**Animation:** Staggered vertical reading rhythm; 650ms entry fade with reduced-motion fallback.

**CTA:** Read planning questions → faq.html

## 04 · The final countdown
**Headline:** The room is ready. / Your moment is next.

**Body copy:** Final reviews bring together the agreed event-day details and responsibilities. The aim is simple: a preparation process that makes space for you to experience your own celebration.

**Visual / layout / imagery prompt:** Full-width architectural reveal transitioning from ivory to crimson.

**Animation:** Staggered vertical reading rhythm; 650ms entry fade with reduced-motion fallback.

**CTA:** Begin your celebration → contact.html

# 16. Wedding Journal
Route: `journal.html`

## Hero — Notes before the celebration
**Headline:** A little perspective / before the big day.

**Subheading/body:** Thoughtful starting points for a celebration with meaning, atmosphere and room to enjoy it.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → Planning note 01 → Planning note 02 → Planning note 03 → directory footer.

## Planning note 01
**Headline:** Choose the feeling / before the flowers.

**Body copy:** Begin with three words you want guests to use after the celebration. Intimate, joyful, ceremonial. Or vibrant, generous, unexpected. Let those words guide decisions when too many options begin to look equally beautiful.

**Visual / layout / imagery prompt:** Magazine-style opening with a large drop cap and marigold margin rule.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Translate your vision → contact.html

## Planning note 02
**Headline:** Give every ritual / its own breathing room.

**Body copy:** Speak with your families and officiant about timing, customs and participation before shaping the wider schedule. A beautiful programme respects the moments that should never feel hurried.

**Visual / layout / imagery prompt:** Two-column reading width with a pull quote.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore the wedding chapters → weddings.html

## Planning note 03
**Headline:** Think about the arrival. / Then the farewell.

**Body copy:** How will guests find their way? Where can older relatives sit comfortably? What will people hear as they enter? Consider the whole journey alongside the visual design. Accessibility and comfort belong in the first conversation.

**Visual / layout / imagery prompt:** Three editorial prompts set beneath an arch illustration.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Explore our process → process.html

# 17. Planning Questions
Route: `faq.html`

## Hero — A few details, beautifully clear
**Headline:** Before we / begin.

**Subheading/body:** Practical answers for the first conversation. Your final arrangements will be set out in your bespoke proposal.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Begin your celebration → contact.html; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → Your services → Location & availability → Investment & booking → First conversation → directory footer.

## Your services
**Headline:** What can Luvvent help us plan?

**Body copy:** Luvvent offers wedding planning, event planning, corporate event organisation, photography, videography and entertainment services. Tell us which elements you need, and we can begin defining a scope.

**Visual / layout / imagery prompt:** Accessible accordion; question is a button-like summary with a visible focus state.

**Animation:** Native accordion; no forced motion.

**CTA:** Explore the services → services.html

## Location & availability
**Headline:** Can we discuss a destination celebration?

**Body copy:** Yes—include your proposed location in the enquiry. Serviceability, travel, venue requirements and availability need to be confirmed individually. We can explore the practical details together before a scope is agreed.

**Visual / layout / imagery prompt:** Single accordion row with plain-language answer.

**Animation:** Native accordion; no forced motion.

**CTA:** Share your location → contact.html

## Investment & booking
**Headline:** How is the investment agreed?

**Body copy:** There are no published package prices here. Your occasion, scale and selected services inform a bespoke proposal. Fees, payment schedule, cancellation terms and booking requirements must be agreed directly with Luvvent.

**Visual / layout / imagery prompt:** Single accordion row; no invented price anchors.

**Animation:** Native accordion; no forced motion.

**CTA:** Request a proposal → contact.html

## First conversation
**Headline:** What should we have ready?

**Body copy:** An approximate date, location, event type and guest estimate are helpful. Share a budget range if you have one, and any rituals or access needs you want considered. It is fine if some details are still undecided.

**Visual / layout / imagery prompt:** Final open accordion followed by a prominent contact link.

**Animation:** Native accordion; no forced motion.

**CTA:** Begin with what you know → contact.html

# 18. Contact Us
Route: `contact.html`

## Hero — Your invitation to begin
**Headline:** The next / beautiful chapter.

**Subheading/body:** Tell us a little about your occasion. We will help turn the first thought into a more considered conversation.

**Visual:** Editorial split opening with a crimson palace concept illustration, generous ivory space and chapter number.

**Motion:** restrained CSS entry; illustration hover zoom. No layout-blocking animation.

**CTA:** Create your invitation → #enquiry; secondary Explore the collection → gallery.html.

**Wireframe:** Header → hero → The invitation → A direct conversation → directory footer.

## The invitation
**Headline:** A few details. / A world of possibility.

**Body copy:** Share what you know today. Dates and guest counts can be approximate. Your message stays in this browser until you choose to open WhatsApp and send it.

**Visual / layout / imagery prompt:** Two-step accessible intake form beside a crimson invitation panel. Clear progress and review before leaving.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Prepare my WhatsApp enquiry → contact.html

## A direct conversation
**Headline:** Prefer to / speak first?

**Body copy:** Call Luvvent Events on 090902 19319 or email luvvent.com@gmail.com. Find us at 5th floor, Maruthee Residency, Sri Ramnagar Colony, Sri Ramnagar – Block B, Gachibowli, Hyderabad, Telangana 500084. Please call before visiting.

**Visual / layout / imagery prompt:** Large readable phone number on ivory; secondary navigation to planning questions.

**Animation:** Opacity/14px rise on intersection; 3% image hover scale when imagery is present; reduced-motion disables transforms.

**CTA:** Call Luvvent → tel:09090219319

# Contact interaction and exact microcopy
Step 1: “First, the celebration.” Fields: Your name (required), The occasion (required), Approximate date, City or venue. Button: “Continue to your vision”.

Step 2: “Now, the feeling.” Fields: Approximate guests, Investment range (optional), What are you imagining? Consent: “I understand my details will be included in a WhatsApp draft. I will review and choose whether to send it.” Button: “Review my invitation”.

Review: “Your message is prepared · Not sent”. Heading: “A beautiful place to begin.” Actions: “Edit details”, “Open WhatsApp”, “Copy message instead”. No response-time promise. The WhatsApp link uses +91 90902 19319, derived from the Indian agency context and printed local number; the user subsequently confirmed this account. Phone uses the original printed number.

# Production notes
This is an 18-page static editorial implementation and a reusable copy blueprint. Do not describe concept studies as completed events. A public launch should confirm the phone/WhatsApp account, supplied-logo usage, service scope and actual privacy practices. No postal address or email is fabricated. Actual editorial photography, verified case studies, production domain and absolute social-image metadata can be added when supplied. The site is usable without them.

# Supplied-image implementation update
Twenty-two images from DATA.zip now feature in a filtered inspiration gallery and selected hero sections. The user confirmed the archive contains mixed work and inspiration, so all selections carry explicit attribution-unconfirmed labels. Source-photo content, original illustrative concept studies and the supplied inspiration collection remain separately labelled. See ARCHIVE-CURATION.md for selection details and collection-manifest.json for the source mapping. The original wireframe represents composition; the website now uses selected photographs in place of its hero illustration on relevant pages.
