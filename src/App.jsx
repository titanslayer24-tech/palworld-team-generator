import React, { useState, useEffect } from "react";

/**
 * PALWORLD TEAM GENERATOR HUB
 * ---------------------------------
 * SINGLE FILE VERSION
 * No external JSON needed.
 * Paste into App.jsx in StackBlitz.
 *
 * Monetization-ready version:
 * - Ad placeholders only. Replace later after ad network approval.
 * - Disclosure + public footer included.
 * - Privacy note included for public launch prep.
 */

// =====================================================
// PAL DATA
// =====================================================

const pals = [
  { name: "Lamball", types: ["neutral"], imageKey: "001" },
  { name: "Cattiva", types: ["neutral"], imageKey: "002" },
  { name: "Chikipi", types: ["neutral"], imageKey: "003" },
  { name: "Lifmunk", types: ["grass"], imageKey: "004" },
  { name: "Foxparks", types: ["fire"], imageKey: "005" },
  { name: "Foxparks Cryst", types: ["ice"], imageKey: "005B" },
  { name: "Fuack", types: ["water"], imageKey: "006" },
  { name: "Fuack Ignis", types: ["water", "fire"], imageKey: "006B" },
  { name: "Sparkit", types: ["electric"], imageKey: "007" },
  { name: "Tanzee", types: ["grass"], imageKey: "008" },
  { name: "Rooby", types: ["fire"], imageKey: "009" },
  { name: "Pengullet", types: ["water", "ice"], imageKey: "010" },
  { name: "Pengullet Lux", types: ["water", "electric"], imageKey: "010B" },
  { name: "Penking", types: ["water", "ice"], imageKey: "011" },
  { name: "Penking Lux", types: ["water", "electric"], imageKey: "011B" },
  { name: "Jolthog", types: ["electric"], imageKey: "012" },
  { name: "Jolthog Cryst", types: ["ice"], imageKey: "012B" },
  { name: "Gumoss", types: ["grass", "ground"], imageKey: "013" },
  { name: "Special Flower Gumoss", types: ["grass", "ground"], imageKey: "013B" },
  { name: "Vixy", types: ["neutral"], imageKey: "014" },
  { name: "Hoocrates", types: ["dark"], imageKey: "015" },
  { name: "Teafant", types: ["water"], imageKey: "016" },
  { name: "Depresso", types: ["dark"], imageKey: "017" },
  { name: "Cremis", types: ["neutral"], imageKey: "018" },
  { name: "Daedream", types: ["dark"], imageKey: "019" },
  { name: "Rushoar", types: ["ground"], imageKey: "020" },
  { name: "Nox", types: ["dark"], imageKey: "021" },
  { name: "Fuddler", types: ["ground"], imageKey: "022" },
  { name: "Killamari", types: ["dark"], imageKey: "023" },
  { name: "Killamari Primo", types: ["neutral", "water"], imageKey: "023B" },
  { name: "Mau", types: ["dark"], imageKey: "024" },
  { name: "Mau Cryst", types: ["ice"], imageKey: "024B" },
  { name: "Celaray", types: ["water"], imageKey: "025" },
  { name: "Celaray Lux", types: ["water", "electric"], imageKey: "025B" },
  { name: "Direhowl", types: ["neutral"], imageKey: "026" },
  { name: "Tocotoco", types: ["neutral"], imageKey: "027" },
  { name: "Flopie", types: ["grass"], imageKey: "028" },
  { name: "Mozzarina", types: ["neutral"], imageKey: "029" },
  { name: "Bristla", types: ["grass"], imageKey: "030" },
  { name: "Gobfin", types: ["water"], imageKey: "031" },
  { name: "Gobfin Ignis", types: ["fire"], imageKey: "031B" },
  { name: "Hangyu", types: ["ground"], imageKey: "032" },
  { name: "Hangyu Cryst", types: ["ice"], imageKey: "032B" },
  { name: "Mossanda", types: ["grass"], imageKey: "033" },
  { name: "Mossanda Lux", types: ["electric"], imageKey: "033B" },
  { name: "Woolipop", types: ["neutral"], imageKey: "034" },
  { name: "Caprity", types: ["grass"], imageKey: "035" },
  { name: "Caprity Noct", types: ["dark"], imageKey: "035B" },
  { name: "Melpaca", types: ["neutral"], imageKey: "036" },
  { name: "Eikthyrdeer", types: ["neutral"], imageKey: "037" },
  { name: "Eikthyrdeer Terra", types: ["ground"], imageKey: "037B" },
  { name: "Nitewing", types: ["neutral"], imageKey: "038" },
  { name: "Ribbuny", types: ["neutral"], imageKey: "039" },
  { name: "Ribbuny Botan", types: ["grass"], imageKey: "039B" },
  { name: "Incineram", types: ["fire", "dark"], imageKey: "040" },
  { name: "Incineram Noct", types: ["dark"], imageKey: "040B" },
  { name: "Cinnamoth", types: ["grass"], imageKey: "041" },
  { name: "Arsox", types: ["fire"], imageKey: "042" },
  { name: "Dumud", types: ["ground"], imageKey: "043" },
  { name: "Dumud Gild", types: ["water", "ground"], imageKey: "043B" },
  { name: "Cawgnito", types: ["dark"], imageKey: "044" },
  { name: "Leezpunk", types: ["dark"], imageKey: "045" },
  { name: "Leezpunk Ignis", types: ["fire"], imageKey: "045B" },
  { name: "Loupmoon", types: ["dark"], imageKey: "046" },
  { name: "Galeclaw", types: ["neutral"], imageKey: "047" },
  { name: "Robinquill", types: ["grass"], imageKey: "048" },
  { name: "Robinquill Terra", types: ["grass", "ground"], imageKey: "048B" },
  { name: "Gorirat", types: ["neutral"], imageKey: "049" },
  { name: "Gorirat Terra", types: ["ground"], imageKey: "049B" },
  { name: "Beegarde", types: ["grass"], imageKey: "050" },
  { name: "Elizabee", types: ["grass"], imageKey: "051" },
  { name: "Grintale", types: ["neutral"], imageKey: "052" },
  { name: "Swee", types: ["ice"], imageKey: "053" },
  { name: "Sweepa", types: ["ice"], imageKey: "054" },
  { name: "Chillet", types: ["ice", "dragon"], imageKey: "055" },
  { name: "Chillet Ignis", types: ["fire", "dragon"], imageKey: "055B" },
  { name: "Univolt", types: ["electric"], imageKey: "056" },
  { name: "Foxcicle", types: ["ice"], imageKey: "057" },
  { name: "Pyrin", types: ["fire"], imageKey: "058" },
  { name: "Pyrin Noct", types: ["fire", "dark"], imageKey: "058B" },
  { name: "Reindrix", types: ["ice"], imageKey: "059" },
  { name: "Rayhound", types: ["electric"], imageKey: "060" },
  { name: "Kitsun", types: ["fire"], imageKey: "061" },
  { name: "Dazzi", types: ["electric"], imageKey: "062" },
  { name: "Lunaris", types: ["neutral"], imageKey: "063" },
  { name: "Dinossom", types: ["grass", "dragon"], imageKey: "064" },
  { name: "Dinossom Lux", types: ["electric", "dragon"], imageKey: "064B" },
  { name: "Surfent", types: ["water"], imageKey: "065" },
  { name: "Surfent Terra", types: ["ground"], imageKey: "065B" },
  { name: "Maraith", types: ["dark"], imageKey: "066" },
  { name: "Digtoise", types: ["ground"], imageKey: "067" },
  { name: "Tombat", types: ["dark"], imageKey: "068" },
  { name: "Lovander", types: ["neutral"], imageKey: "069" },
  { name: "Flambelle", types: ["fire"], imageKey: "070" },
  { name: "Vanwyrm", types: ["fire", "dark"], imageKey: "071" },
  { name: "Vanwyrm Cryst", types: ["ice", "dark"], imageKey: "071B" },
  { name: "Bushi", types: ["fire"], imageKey: "072" },
  { name: "Bushi Noct", types: ["fire", "dark"], imageKey: "072B" },
  { name: "Beakon", types: ["electric"], imageKey: "073" },
  { name: "Ragnahawk", types: ["fire"], imageKey: "074" },
  { name: "Katress", types: ["dark"], imageKey: "075" },
  { name: "Katress Ignis", types: ["fire"], imageKey: "075B" },
  { name: "Wixen", types: ["fire"], imageKey: "076" },
  { name: "Wixen Noct", types: ["dark"], imageKey: "076B" },
  { name: "Verdash", types: ["grass"], imageKey: "077" },
  { name: "Vaelet", types: ["grass"], imageKey: "078" },
  { name: "Sibelyx", types: ["ice"], imageKey: "079" },
  { name: "Elphidran", types: ["dragon"], imageKey: "080" },
  { name: "Elphidran Aqua", types: ["dragon", "water"], imageKey: "080B" },
  { name: "Kelpsea", types: ["water"], imageKey: "081" },
  { name: "Kelpsea Ignis", types: ["fire"], imageKey: "081B" },
  { name: "Azurobe", types: ["water", "dragon"], imageKey: "082" },
  { name: "Azurobe Cryst", types: ["ice", "dragon"], imageKey: "082B" },
  { name: "Cryolinx", types: ["ice"], imageKey: "083" },
  { name: "Cryolinx Terra", types: ["ground"], imageKey: "083B" },
  { name: "Blazehowl", types: ["fire"], imageKey: "084" },
  { name: "Blazehowl Noct", types: ["fire", "dark"], imageKey: "084B" },
  { name: "Relaxaurus", types: ["dragon", "water"], imageKey: "085" },
  { name: "Relaxaurus Lux", types: ["dragon", "electric"], imageKey: "085B" },
  { name: "Broncherry", types: ["grass"], imageKey: "086" },
  { name: "Broncherry Aqua", types: ["grass", "water"], imageKey: "086B" },
  { name: "Petallia", types: ["grass"], imageKey: "087" },
  { name: "Reptyro", types: ["fire", "ground"], imageKey: "088" },
  { name: "Reptyro Cryst", types: ["ice", "ground"], imageKey: "088B" },
  { name: "Kingpaca", types: ["neutral"], imageKey: "089" },
  { name: "Kingpaca Cryst", types: ["ice"], imageKey: "089B" },
  { name: "Mammorest", types: ["grass", "ground"], imageKey: "090" },
  { name: "Mammorest Cryst", types: ["ice", "ground"], imageKey: "090B" },
  { name: "Wumpo", types: ["ice"], imageKey: "091" },
  { name: "Wumpo Botan", types: ["grass"], imageKey: "091B" },
  { name: "Warsect", types: ["grass", "ground"], imageKey: "092" },
  { name: "Fenglope", types: ["neutral"], imageKey: "093" },
  { name: "Felbat", types: ["dark"], imageKey: "094" },
  { name: "Quivern", types: ["dragon"], imageKey: "095" },
  { name: "Quivern Botan", types: ["grass", "dragon"], imageKey: "095B" },
  { name: "Blazamut", types: ["fire"], imageKey: "096", tags: ["raid", "legendary"] },
  { name: "Blazamut Ryu", types: ["fire", "dragon"], imageKey: "096B", tags: ["raid", "legendary"] },
  { name: "Helzephyr", types: ["dark"], imageKey: "097" },
  { name: "Helzephyr Lux", types: ["electric"], imageKey: "097B" },
  { name: "Astegon", types: ["dragon", "dark"], imageKey: "098" },
  { name: "Menasting", types: ["dark", "ground"], imageKey: "099" },
  { name: "Menasting Terra", types: ["ground"], imageKey: "099B" },
  { name: "Anubis", types: ["ground"], imageKey: "100" },
  { name: "Jormuntide", types: ["water", "dragon"], imageKey: "101" },
  { name: "Jormuntide Ignis", types: ["fire", "dragon"], imageKey: "101B" },
  { name: "Suzaku", types: ["fire"], imageKey: "102" },
  { name: "Suzaku Aqua", types: ["water"], imageKey: "102B" },
  { name: "Grizzbolt", types: ["electric"], imageKey: "103" },
  { name: "Lyleen", types: ["grass"], imageKey: "104" },
  { name: "Lyleen Noct", types: ["dark"], imageKey: "104B" },
  { name: "Faleris", types: ["fire"], imageKey: "105" },
  { name: "Orserk", types: ["dragon", "electric"], imageKey: "106" },
  { name: "Shadowbeak", types: ["dark"], imageKey: "107", tags: ["legendary"] },
  { name: "Paladius", types: ["neutral"], imageKey: "108", tags: ["legendary"] },
  { name: "Necromus", types: ["dark"], imageKey: "109", tags: ["legendary"] },
  { name: "Frostallion", types: ["ice"], imageKey: "110", tags: ["legendary"] },
  { name: "Frostallion Noct", types: ["dark"], imageKey: "110B", tags: ["legendary"] },
  { name: "Jetragon", types: ["dragon"], imageKey: "111", tags: ["legendary"] },
  { name: "Bellanoir", types: ["dark"], imageKey: "112", tags: ["raid", "legendary"] },
  { name: "Bellanoir Libero", types: ["dark"], imageKey: "112B", tags: ["raid", "legendary"] },
  { name: "Selyne", types: ["dark", "neutral"], imageKey: "113", tags: ["legendary"] },
  { name: "Croajiro", types: ["water"], imageKey: "114" },
  { name: "Croajiro Noct", types: ["water", "dark"], imageKey: "114B" },
  { name: "Lullu", types: ["grass"], imageKey: "115" },
  { name: "Shroomer", types: ["grass"], imageKey: "116" },
  { name: "Shroomer Noct", types: ["grass", "dark"], imageKey: "116B" },
  { name: "Kikit", types: ["ground"], imageKey: "117" },
  { name: "Sootseer", types: ["dark", "fire"], imageKey: "118" },
  { name: "Prixter", types: ["dark", "ground"], imageKey: "119" },
  { name: "Knocklem", types: ["ground"], imageKey: "120" },
  { name: "Yakumo", types: ["neutral"], imageKey: "121" },
  { name: "Dogen", types: ["neutral"], imageKey: "122" },
  { name: "Dazemu", types: ["ground"], imageKey: "123" },
  { name: "Mimog", types: ["neutral"], imageKey: "124" },
  { name: "Xenogard", types: ["dragon"], imageKey: "125", tags: ["legendary"] },
  { name: "Xenolord", types: ["dragon", "dark"], imageKey: "126", tags: ["raid", "legendary"] },
  { name: "Nitemary", types: ["dark"], imageKey: "127" },
  { name: "Herbil", types: ["grass", "neutral"], imageKey: "141" },
  { name: "Jelliette", types: ["water"], imageKey: "150" },
  { name: "Gloopie", types: ["water", "dark"], imageKey: "151" },
  { name: "Finsider", types: ["water"], imageKey: "152" },
  { name: "Finsider Ignis", types: ["water", "fire"], imageKey: "152B" },
  { name: "Ghangler", types: ["dark", "water"], imageKey: "153" },
  { name: "Ghangler Ignis", types: ["fire", "water"], imageKey: "153B" },
  { name: "Whalaska", types: ["ice", "water"], imageKey: "154" },
  { name: "Whalaska Ignis", types: ["ice", "fire"], imageKey: "154B" },
  { name: "Neptilius", types: ["water"], imageKey: "155", tags: ["legendary"] },
  { name: "Hartalis", types: ["neutral"], imageKey: "156", tags: ["legendary"] },
];

// =====================================================
// IMAGE + TYPE HELPERS
// =====================================================

const IMAGE_BASE =
  "https://raw.githubusercontent.com/mlg404/palworld-paldex-api/main/public/images/paldeck";

const typeIcons = {
  neutral: "✨",
  fire: "🔥",
  water: "🌊",
  ice: "❄️",
  electric: "⚡",
  grass: "🌿",
  ground: "🪨",
  dark: "🌙",
  dragon: "🐉",
};

const typeColors = {
  neutral: "#d7d7d7",
  fire: "#ff7a3d",
  water: "#52c7ff",
  ice: "#9be8ff",
  electric: "#ffe45c",
  grass: "#65e57a",
  ground: "#c69a5b",
  dark: "#9d8cff",
  dragon: "#ff7ee7",
};

function getImageUrl(pal) {
  if (!pal.imageKey) return null;
  return `${IMAGE_BASE}/${pal.imageKey}.png`;
}

function fallbackIcon(pal) {
  return typeIcons[pal.types?.[0]] || "✨";
}

function unique(arr) {
  return [...new Set(arr)];
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

const ALL_TYPES = unique(pals.flatMap((pal) => pal.types)).sort();

// =====================================================
// TEAM GENERATOR
// =====================================================

function generateTeam(mode) {
  let pool = [...pals];

  if (mode === "legendary") {
    // Uses explicit tags so newer legendary / raid / endgame Pals are not missed.
    pool = pals.filter((pal) =>
      Array.isArray(pal.tags) &&
      (pal.tags.includes("legendary") || pal.tags.includes("raid"))
    );
  } else if (ALL_TYPES.includes(mode)) {
    if (mode === "neutral") {
      pool = pals.filter(
        (pal) => pal.types.length === 1 && pal.types.includes("neutral")
      );
    } else {
      pool = pals.filter((pal) => pal.types.includes(mode));
    }
  }

  // Strict neutral should never fall back into mixed types.
  if (pool.length < 5 && mode !== "neutral") {
    pool = pals;
  }

  return shuffle(pool).slice(0, 5);
}

// =====================================================
// SHARE SYSTEM
// =====================================================

function shareTeam(team, mode) {
  const text = `I generated this ${mode} Palworld team:\n\n${team
    .map((pal) => `• ${pal.name} (${pal.types.join(" / ")})`)
    .join("\n")}\n\nGenerate your own squad!`;

  if (navigator.share) {
    navigator.share({
      title: "Palworld Team Generator",
      text,
      url: window.location.href,
    });
  } else {
    navigator.clipboard.writeText(text);
    alert("Team copied to clipboard!");
  }
}

// =====================================================
// UI COMPONENTS
// =====================================================

function SEOBlock({ title, text }) {
  return (
    <div style={infoBlockStyle}>
      <h3 style={{ color: "#4df0ff", marginTop: 0 }}>{title}</h3>
      <p style={{ color: "#d7ecff", lineHeight: 1.7 }}>{text}</p>
    </div>
  );
}

function AdSlot({ label = "Advertisement" }) {
  return (
    <div style={adSlotStyle}>
      <div style={{ fontSize: 12, color: "#9fdcff", marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ color: "#cfe9ff", fontSize: 13 }}>
        Ad placement reserved for future Google AdSense / sponsor banner
      </div>
    </div>
  );
}

function DisclosureBlock({ navigate }) {
  return (
    <div style={infoBlockStyle}>
      <h3 style={{ color: "#4df0ff", marginTop: 0 }}>Support This Tool</h3>
      <p style={{ color: "#d7ecff", lineHeight: 1.7 }}>
        This fan-made Palworld tool may eventually use ads, sponsorships, or affiliate links to help keep the site online. Recommendations and generator results are not paid placements.
      </p>
      <button onClick={() => navigate("privacy")} style={textLinkButtonStyle}>
        Read the Privacy Policy
      </button>
    </div>
  );
}

function PrivacyPolicyPage({ goHome }) {
  const lastUpdated = "May 30, 2026";

  return (
    <section style={policyPageStyle}>
      <button onClick={goHome} style={backButtonStyle}>
        ← Back Home
      </button>

      <h2 style={sectionTitleStyle}>Privacy Policy</h2>
      <p style={policyMutedStyle}>Last updated: {lastUpdated}</p>

      <p style={policyTextStyle}>
        This Privacy Policy explains how Palworld Team Generator Hub (the “Site”) handles information when you visit and use the fan-made team generator.
      </p>

      <PolicySection title="Information we collect">
        <p style={policyTextStyle}>
          The Site does not currently require accounts, request your name or email address, store generated teams, or directly collect personal information through forms.
        </p>
        <p style={policyTextStyle}>
          The Site is hosted on Netlify. Like other hosting providers, Netlify may process technical information needed to deliver and secure the Site, such as request and device/network information, according to Netlify’s own privacy practices.
        </p>
      </PolicySection>

      <PolicySection title="Team generation and sharing">
        <p style={policyTextStyle}>
          Team generation happens in your browser. When you use the Share This Team button, your browser or device sharing feature may be used, or the generated team text may be copied to your clipboard. The Site does not receive the content you share or the destination where you send it.
        </p>
      </PolicySection>

      <PolicySection title="Advertising and affiliate links">
        <p style={policyTextStyle}>
          The visible advertisement areas on the Site are currently placeholders only. The Site does not currently serve third-party ads or use affiliate links.
        </p>
        <p style={policyTextStyle}>
          If advertising or affiliate links are enabled in the future, this policy will be updated before activation to identify the services used and describe applicable data practices, cookies, opt-out choices, and disclosures.
        </p>
      </PolicySection>

      <PolicySection title="Cookies and analytics">
        <p style={policyTextStyle}>
          The Site does not currently add its own analytics or advertising cookies. Hosting infrastructure or external image hosting may still receive ordinary web requests needed to load the Site and Pal images.
        </p>
        <p style={policyTextStyle}>
          If analytics, personalized ads, or other cookie-based tools are enabled later, this policy and any required consent controls will be updated before those tools are used.
        </p>
      </PolicySection>

      <PolicySection title="External images and third-party services">
        <p style={policyTextStyle}>
          Pal images are loaded from an external public image source. When your browser loads an external image, the image host may receive standard request information needed to deliver that image. The Site is not responsible for the privacy practices of external services.
        </p>
      </PolicySection>

      <PolicySection title="Children’s privacy">
        <p style={policyTextStyle}>
          The Site is a general-audience fan tool and is not intended to collect personal information from children. The Site does not knowingly request or collect personal information from children.
        </p>
      </PolicySection>

      <PolicySection title="Changes to this policy">
        <p style={policyTextStyle}>
          This Privacy Policy may be updated as features change, particularly if advertising, affiliate links, analytics, accounts, or contact forms are added. The updated date will be shown at the top of this page.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p style={policyTextStyle}>
          A dedicated privacy contact email will be added before third-party advertising, analytics, or other data-collecting features are activated on the Site.
        </p>
      </PolicySection>

      <p style={policyMutedStyle}>
        This Site is fan-made and is not affiliated with Pocketpair. Palworld names and imagery belong to their respective owners.
      </p>
    </section>
  );
}

function PolicySection({ title, children }) {
  return (
    <div style={policySectionStyle}>
      <h3 style={{ color: "#4df0ff", marginTop: 0 }}>{title}</h3>
      {children}
    </div>
  );
}

function PalImage({ pal }) {
  const [broken, setBroken] = useState(false);
  const imageUrl = getImageUrl(pal);

  if (!imageUrl || broken) {
    return (
      <div style={fallbackImageStyle}>
        <span>{fallbackIcon(pal)}</span>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={`${pal.name} icon`}
      onError={() => setBroken(true)}
      style={{
        width: 96,
        height: 96,
        objectFit: "contain",
        filter: "drop-shadow(0 0 10px rgba(77,240,255,0.25))",
      }}
    />
  );
}

function TypeBadge({ type }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 8px",
        margin: 3,
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 700,
        color: "#08111c",
        background: typeColors[type] || "#9fe7ff",
      }}
    >
      {typeIcons[type] || "✨"} {type}
    </span>
  );
}

function TeamGrid({ team }) {
  return (
    <div style={teamGridStyle}>
      {team.map((pal, index) => (
        <div key={`${pal.name}-${index}`} style={palCardStyle}>
          <PalImage pal={pal} />

          <div style={{ fontWeight: 800, marginTop: 12, fontSize: 18 }}>
            {pal.name}
          </div>

          <div style={{ marginTop: 8 }}>
            {pal.types.map((type) => (
              <TypeBadge key={type} type={type} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Layout({ children, navigate }) {
  useEffect(() => {
    document.title = "Palworld Team Generator Hub | Random Teams & Challenge Builds";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Generate random Palworld teams, elemental builds, legendary squads, and challenge runs with a free fan-made Palworld team generator."
    );
  }, []);

  return (
    <div style={pageStyle}>
      <header style={{ textAlign: "center", marginBottom: 30 }}>
        <h1 style={titleStyle}>Palworld Team Generator Hub</h1>
        <p style={subtitleStyle}>
          Generate random Palworld teams, elemental builds, legendary squads,
          and challenge compositions instantly.
        </p>
      </header>

      <main>{children}</main>

      <footer style={footerStyle}>
        <p style={{ margin: 0 }}>
          Fan-made Palworld tool. Not affiliated with Pocketpair. Pal names and imagery belong to their respective owners.
        </p>
        <p style={{ margin: "8px 0 0" }}>
          <button onClick={() => navigate("privacy")} style={footerLinkButtonStyle}>
            Privacy Policy
          </button>
        </p>
      </footer>
    </div>
  );
}

// =====================================================
// PAGES
// =====================================================

function HomePage({ navigate }) {
  return (
    <>
      <AdSlot label="Top Ad Slot" />

      <section>
        <h2 style={sectionTitleStyle}>Core Modes</h2>

        <div style={buttonGridStyle}>
          <button style={modeButtonStyle} onClick={() => navigate("legendary")}>
            🐉 Legendary Teams
          </button>

          <button style={modeButtonStyle} onClick={() => navigate("random")}>
            🎲 Random Teams
          </button>
        </div>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={sectionTitleStyle}>Single Type Teams</h2>
        <p style={{ color: "#cfe9ff" }}>
          Dual-type Pals are included inside each matching type button. For example,
          a Fire / Dragon Pal can appear in both Fire and Dragon team generators.
        </p>

        <div style={buttonGridStyle}>
          {ALL_TYPES.map((type) => (
            <button key={type} style={modeButtonStyle} onClick={() => navigate(type)}>
              {typeIcons[type] || "✨"} {type.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <SEOBlock
        title="What is this tool?"
        text="This Palworld Team Generator creates random squads for challenge runs, roleplay teams, elemental builds, and legendary-only gameplay."
      />

      <SEOBlock
        title="Popular Palworld team searches"
        text="Players commonly search for fire teams, dark-type teams, dragon compositions, legendary squads, and challenge run generators."
      />

      <AdSlot label="Homepage Ad Slot" />

      <DisclosureBlock navigate={navigate} />

      <SEOBlock
        title="FAQ"
        text="This is a fan-made Palworld tool. Dual-type Pals are included in both matching single-type generators. Neutral mode is strict and only uses pure single-type Neutral Pals. Legendary mode uses explicit legendary and raid tags so newer endgame Pals are easier to keep included."
      />
    </>
  );
}

function GeneratorPage({ mode, goHome }) {
  const [team, setTeam] = useState(() => generateTeam(mode));

  useEffect(() => {
    setTeam(generateTeam(mode));
  }, [mode]);

  const heading =
    mode === "legendary"
      ? "Legendary Teams"
      : mode === "random"
      ? "Random Teams"
      : `${mode.toUpperCase()} Teams`;

  return (
    <>
      <button onClick={goHome} style={backButtonStyle}>
        ← Back Home
      </button>

      <h2 style={sectionTitleStyle}>{heading}</h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <button onClick={() => setTeam(generateTeam(mode))} style={primaryButtonStyle}>
          Generate New Team
        </button>

        <button onClick={() => shareTeam(team, mode)} style={secondaryButtonStyle}>
          Share This Team
        </button>
      </div>

      <TeamGrid team={team} />

      <AdSlot label="Generator Page Ad Slot" />

      <SEOBlock
        title="About this generator"
        text={`This page generates ${mode} Palworld teams for challenge runs, experimentation, and gameplay variety.`}
      />

      <SEOBlock
        title="Related Team Types"
        text="Explore additional Palworld elemental combinations and challenge builds using the home page browser system."
      />
    </>
  );
}

// =====================================================
// STYLES
// =====================================================

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg,#050914,#0d1628,#10253a)",
  color: "white",
  padding: 24,
  fontFamily: "Segoe UI, sans-serif",
};

const titleStyle = {
  color: "#4df0ff",
  fontSize: 42,
  marginBottom: 10,
  textShadow: "0 0 12px rgba(77,240,255,0.4)",
};

const subtitleStyle = {
  color: "#cfe9ff",
  maxWidth: 760,
  margin: "0 auto",
  lineHeight: 1.6,
};

const sectionTitleStyle = {
  color: "#4df0ff",
  fontSize: 30,
};

const buttonGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: 14,
};

const modeButtonStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(77,240,255,0.25)",
  borderRadius: 16,
  padding: 16,
  textAlign: "center",
  color: "#ffffff",
  cursor: "pointer",
  fontWeight: 800,
};

const teamGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: 16,
  marginTop: 24,
};

const palCardStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(77,240,255,0.24)",
  borderRadius: 18,
  padding: 18,
  textAlign: "center",
  color: "white",
  boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
};

const fallbackImageStyle = {
  width: 96,
  height: 96,
  margin: "0 auto",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(77,240,255,0.22), rgba(255,255,255,0.04))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 38,
};

const infoBlockStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(77,240,255,0.2)",
  borderRadius: 14,
  padding: 18,
  marginTop: 24,
};

const adSlotStyle = {
  marginTop: 28,
  padding: 18,
  borderRadius: 14,
  border: "1px dashed rgba(77,240,255,0.45)",
  background: "rgba(77,240,255,0.05)",
  textAlign: "center",
};

const footerStyle = {
  marginTop: 48,
  paddingTop: 24,
  borderTop: "1px solid rgba(255,255,255,0.12)",
  color: "#9fb7d3",
  fontSize: 13,
  textAlign: "center",
};

const primaryButtonStyle = {
  background: "#4df0ff",
  color: "#001018",
  border: "none",
  padding: "12px 18px",
  borderRadius: 12,
  fontWeight: 800,
  cursor: "pointer",
};

const secondaryButtonStyle = {
  background: "rgba(255,255,255,0.06)",
  color: "#e8f1ff",
  border: "1px solid rgba(77,240,255,0.35)",
  padding: "12px 18px",
  borderRadius: 12,
  fontWeight: 800,
  cursor: "pointer",
};

const backButtonStyle = {
  ...secondaryButtonStyle,
  marginBottom: 20,
};

const textLinkButtonStyle = {
  background: "transparent",
  border: "none",
  color: "#9fe7ff",
  padding: 0,
  textDecoration: "underline",
  cursor: "pointer",
  fontSize: 14,
};

const footerLinkButtonStyle = {
  ...textLinkButtonStyle,
  color: "#cfe9ff",
};

const policyPageStyle = {
  maxWidth: 920,
  margin: "0 auto",
};

const policySectionStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(77,240,255,0.18)",
  borderRadius: 14,
  padding: 18,
  marginTop: 18,
};

const policyTextStyle = {
  color: "#d7ecff",
  lineHeight: 1.75,
};

const policyMutedStyle = {
  color: "#9fb7d3",
  lineHeight: 1.6,
};

// =====================================================
// APP
// =====================================================

export default function App() {
  const readPageFromHash = () => window.location.hash.replace("#", "") || "home";
  const [page, setPage] = useState(readPageFromHash);

  useEffect(() => {
    const onHashChange = () => setPage(readPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function navigate(nextPage) {
    if (nextPage === "home") {
      window.location.hash = "";
      setPage("home");
    } else {
      window.location.hash = nextPage;
      setPage(nextPage);
    }
  }

  return (
    <Layout navigate={navigate}>
      {page === "home" ? (
        <HomePage navigate={navigate} />
      ) : page === "privacy" ? (
        <PrivacyPolicyPage goHome={() => navigate("home")} />
      ) : (
        <GeneratorPage mode={page} goHome={() => navigate("home")} />
      )}
    </Layout>
  );
}
