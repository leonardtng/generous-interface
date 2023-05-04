interface Props {
  location: string;
}

const citationArray = [
  <>
    J. A. Baird, <i>Dura-Europos</i> (London, New York: Bloomsbury Academic,
    2018), 32-33.
  </>,
  <>
    Carl Hermann Kraeling, <i>The Synagogue</i>.{" "}
    <i>Excavations at Dura-Europos Final Report 8, Part 1</i> (New Haven:
    Dura-Europos Publications, 1955), 5.
  </>,
  <>
    Kraeling, <i>The Synagogue</i>, 6.
  </>,
  <>
    Kraeling, <i>The Synagogue</i>, 26-33; Baird, <i>Dura-Europos</i>, 138-139.
  </>,
  <>
    Kraeling, <i>The Synagogue</i>, 8.
  </>,
  <>
    Kraeling, <i>The Synagogue</i>, 9.
  </>,
  <>
    Kraeling, <i>The Synagogue</i>, 10.
  </>,
  <>
    Kraeling, <i>The Synagogue</i>, 13.
  </>,
  <>
    Kraeling, <i>The Synagogue</i>.
  </>,
  <>
    Kraeling, <i>The Synagogue</i>.
  </>,
  <>
    For an overview of these debates, see: A. J. Wharton, “Good and Bad Images
    from the Synagogue of Dura Europos : Contexts, Subtexts, Intertexts,” Art
    History 17, no. 1 (1994): 1–25 and Margaret Olin, “‘Early Christian
    Synagogues’ and ‘Jewish Art Historians’: The Discovery of the Synagogue of
    Dura-Europos,” <i>Marburger Jahrbuch Für Kunstwissenschaft</i> 27 (2000):
    7–28.
  </>,
  <>
    See A. J. Wharton, “Good and Bad Images,” 1–25; Baird, <i>Dura-Europos</i>,
    141-143.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 140.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 111.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 76-77.
  </>,
  <>
    P. V. C. Baur, Michael Ivanovitch Rostovtzeff and Alfred R Bellinger (eds.),{" "}
    <i>
      The Excavations at Dura-Europos III Preliminary Report of Third Season.
      Nov. 1929 — March 1930
    </i>{" "}
    (New Haven: Yale University. Press, 1932), 95.
  </>,
  <>
    Baur, Rostovtzeff and Bellinger (eds.),{" "}
    <i>Preliminary Report of Third Season</i>, 35.
  </>,
  <>
    Baur, Rostovtzeff and Bellinger (eds.),{" "}
    <i>Preliminary Report of Third Season</i>, 21.
  </>,
  <>
    Baur, Rostovtzeff and Bellinger (eds.),{" "}
    <i>Preliminary Report of Third Season</i>, 9.
  </>,
  <>
    Baur, Rostovtzeff and Bellinger (eds.),{" "}
    <i>Preliminary Report of Third Season</i>, 9.
  </>,
  <>
    Baur, Rostovtzeff and Bellinger (eds.),{" "}
    <i>Preliminary Report of Third Season</i>, 8-9; J. A. Baird,{" "}
    <i>Dura-Europos</i> (London, New York: Bloomsbury Academic, 2018), 103.
  </>,
  <>
    Michael Ivanovitch Rostovtzeff, Alfred R. Bellinger, F. E. Brown, and C. B.
    Welles (eds.),{" "}
    <i>
      The Excavations at Dura-Europos, Conducted by Yale University and the
      French Academy of Inscriptions and Letters. Preliminary Report of the
      Ninth Season of Work, 1935-1936.{" "}
    </i>
    (New Haven: Yale University Press, 1952), 12.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 97.
  </>,
  <>
    Baur, Rostovtzeff and Bellinger (eds.),{" "}
    <i>Preliminary Report of Third Season</i>, 23.
  </>,
  <>
    Baur, Rostovtzeff and Bellinger (eds.),{" "}
    <i>Preliminary Report of Third Season</i>, 9-11.
  </>,
  <>
    Baur, Rostovtzeff and Bellinger (eds.),{" "}
    <i>Preliminary Report of Third Season</i>, 9-11.
  </>,
  <>
    Baur, Rostovtzeff and Bellinger (eds.),{" "}
    <i>Preliminary Report of Third Season</i>, 100.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 18.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 75.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, p148.
  </>,
  <>
    J. A. Baird, <i>Dura-Europos</i> (London, New York: Bloomsbury Academic,
    2018), 1.
  </>,
  <>
    P. V. C. Baur and Michael Ivanovitch Rostovtzeff (eds.),{" "}
    <i>
      The Excavations at Dura-Europos I Preliminary Report of First Season of
      Work, Spring 1928{" "}
    </i>
    (New Haven: Yale University Press, 1929); P. V. C. Baur and Michael
    Ivanovitch Rostovtzeff (eds.),{" "}
    <i>
      The Excavations at Dura-Europos II Preliminary Report of Second Season.
      Oct. 1928 — April 1929{" "}
    </i>
    (New Haven: Yale University Press, 1931); Michael Ivanovitch Rostovzeff,
    Alfred R. Bellinger, Clark Hopkins, C. Welles, and Charles Bradford (eds.),{" "}
    <i>
      The Excavations at Dura-Europos Conducted by Yale University and the
      French Academy of Inscriptions and Letters: Preliminary Report of Sixth
      Season of Work Oct. 1932-March 1933{" "}
    </i>
    (New Haven: Yale University Press, 1936).
  </>,
  <>
    Baur and Rostovtzeff (eds.),{" "}
    <i>Preliminary Report of First Season of Work</i>, 11.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 9.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 113.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 113.
  </>,
  <>
    Simon James,{" "}
    <i>
      The Roman Military Base at Dura-Europos, Syria: An Archaeological
      Visualisation,{" "}
    </i>
    (Oxford, New York: Oxford University Press, 2019), 233.
  </>,
  <>
    James,{" "}
    <i>The Roman Military Base at Dura-Europos, 233; Baur and Rostovtzeff </i>
    (eds.), <i>Preliminary Report of Second Season</i>, 5.
  </>,
  <>
    Baur and Rostovtzeff (eds.),{" "}
    <i>Preliminary Report of First Season of Work</i>, 6.
  </>,
  <>
    Baur and Rostovtzeff (eds.),{" "}
    <i>Preliminary Report of First Season of Work</i>, 9.
  </>,
  <>
    Baur and Rostovtzeff (eds.), <i>Preliminary Report of Second Season</i>, 7.
  </>,
  <>
    Baur and Rostovtzeff (eds.),{" "}
    <i>Preliminary Report of First Season of Work</i>, 9.
  </>,
  <>
    Baur and Rostovtzeff (eds.), <i>Preliminary Report of Second Season</i>, 7.
  </>,
  <>
    James, <i>The Roman Military Base at Dura-Europos</i>, 233ff.
  </>,
  <>
    Baur and Rostovtzeff (eds.),{" "}
    <i>Preliminary Report of First Season of Work</i>, 11.
  </>,
  <>
    James, <i>The Roman Military Base at Dura-Europos</i>, 233ff. Baur and
    Rostovtzeff (eds.), <i>Preliminary Report of First Season of Work</i>, 36,
    50, 60; Baur and Rostovtzeff (eds.),{" "}
    <i>Preliminary Report of Second Season</i>, 155, 147.
  </>,
  <>
    Baur and Rostovtzeff (eds.),{" "}
    <i>Preliminary Report of First Season of Work</i>, 30. See also Baur and
    Rostovtzeff (eds.), <i>Preliminary Report of Second Season</i>, 114.
  </>,
  <>
    Baur and Rostovtzeff (eds.), <i>Preliminary Report of Second Season</i>,
    174.
  </>,
  <>
    Baur and Rostovtzeff (eds.), <i>Preliminary Report of Second Season</i>,
    63-68.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 47
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 1; James,{" "}
    <i>The Roman Military Base at Dura-Europos</i>, 233ff.
  </>,
  <>
    Baur and Rostovtzeff (eds.), <i>Preliminary Report of Second Season</i>,
    146.
  </>,
  <>
    Baur and Rostovtzeff (eds.), <i>Preliminary Report of Second Season</i>, 78.
  </>,
  <>
    Baur and Rostovtzeff (eds.), <i>Preliminary Report of Second Season</i>, 70.
  </>,
  <>
    Baur and Rostovtzeff (eds.), <i>Preliminary Report of Second Season</i>, 8.
  </>,
  <>
    Baur and Rostovtzeff (eds.), <i>Preliminary Report of Second Season</i>, 8.
  </>,
  <>
    Baur and Rostovtzeff (eds.), <i>Preliminary Report of Second Season</i>,
    178.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 65.
  </>,
  <>
    J. A. Baird, <i>Dura-Europos </i>(London, New York: Bloomsbury Academic,
    2018), 29-30; Tommaso Gnoli, “The Mithraeum of Dura-Europos: New
    Perspectives,” in Ted Kaizer (ed.),{" "}
    <i>Religion, Society and Culture at Dura-Europos </i>(Cambridge: Cambridge
    University Press, 2017), 127.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 107; Gnoli, “The Mithraeum of Dura-Europos,”
    128.
  </>,
  <>
    Lucinda Dirven and Matthew McCarty, “Rethinking the Dura-Europos Mithraeum:
    Diversification and Stabilization in a Mithraic Community,” in Matthew
    McCarty and Mariana Egri (eds){" "}
    <i>
      The Archaeology of Mithraism: New Finds and Approaches to Mithras-Worship
    </i>
    , (Leuven, Bristol, CT: Peeters, 2020), 165.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 29-30.
  </>,
  <>Gnoli, “The Mithraeum of Dura-Europos,” 129.</>,
  <>
    Gnoli, “The Mithraeum of Dura-Europos,” 129; Baird, <i>Dura-Europos</i>, 31.
  </>,
  <>Dirven and McCarty, “Rethinking the Dura-Europos Mithraeum,” 175.</>,
  <>Dirven and McCarty, “Rethinking the Dura-Europos Mithraeum,” 176.</>,
  <>
    Baird, <i>Dura-Europos</i>, 107.
  </>,
  <>Dirven and McCarty, “Rethinking the Dura-Europos Mithraeum,” 177.</>,
  <>
    Gnoli, “The Mithraeum of Dura-Europos,” 130; Baird, <i>Dura-Europos</i>,
    107.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 137.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 137.
  </>,
  <>Dirven and McCarty, “Rethinking the Dura-Europos Mithraeum,” 177.</>,
  <>Gnoli, “The Mithraeum of Dura-Europos,” 143.</>,
  <>See Dirven and McCarty, “Rethinking the Dura-Europos Mithraeum,” 168.</>,
  <>Dirven and McCarty, “Rethinking the Dura-Europos Mithraeum,” 168.</>,
  <>
    J. A. Baird, <i>Dura-Europos</i> (London, New York: Bloomsbury Academic,
    2018), 13.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 37.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 37.
  </>,
  <>
    Carl Hermann Kraeling,{" "}
    <i>
      The Christian Building. Excavations at Dura-Europos Final Report 8, Part 2{" "}
    </i>
    (New Haven: Dura-Europos Publications, 1967) 34-39.
  </>,
  <>
    Kraeling, <i>The Christian Building</i>, 3.
  </>,
  <>
    Kraeling, <i>The Christian Building</i>, 4.
  </>,
  <>
    Kraeling, <i>The Christian Building</i>, 4.
  </>,
  <>
    Kraeling, <i>The Christian Building</i>, 5.
  </>,
  <>
    Joan Branham, “The World’s Oldest Church: Bible, Art, and Ritual at
    Dura-Europos, Syria by Michael Peppard (Review),”{" "}
    <i>Journal of Early Christian Studies</i> 26, no. 2 (2018): 341.
  </>,
  <>
    Joan Branham, “The World’s Oldest Church: Bible, Art, and Ritual at
    Dura-Europos, Syria by Michael Peppard (Review),”{" "}
    <i>Journal of Early Christian Studies</i> 26, no. 2 (2018): 342.
  </>,
  <>
    Scott Harrower, “Visual Exegesis at ‘The World’s Oldest Church’: A Case
    Study for Historiography,”{" "}
    <i>Zeitschrift Für Antikes Christentum / Journal of Ancient Christianity</i>{" "}
    22, no. 3 (December 1, 2018): 469.
  </>,
  <>
    Baird, <i>Dura-Europos</i>, 77.
  </>,
];

const rangeArray = (start: number, end: number) => {
  return Array.from(new Array(end - start + 1), (x, i) => i + start);
};

const supConstructor = (n: number) => {
  return (
    <a href={`#f${n}`}>
      <sup>{n}</sup>
    </a>
  );
};

const citationConstructor = (n: number) => {
  return (
    <p id={`f${n}`}>
      [{n}] {citationArray[n - 1]}
    </p>
  );
};

const footerConstructor = (start: number, end: number) => {
  return (
    <footer className="text-sm">
      <hr className="my-[10px]"></hr>
      <div>
        {rangeArray(start, end).map((i: number) => {
          return citationConstructor(i);
        })}
      </div>
    </footer>
  );
};

const synagogueDescription = () => {
  return (
    <div className="text-white">
      <p>
        &emsp; The synagogue of Dura-Europos as it was at the time of the city’s
        destruction can be dated to around 244-245 CE.{supConstructor(1)} It is
        part of a mainly residential city block and is composed of three main
        parts: the dwelling (“House H”), a fore-court, and the House of
        Assembly.
        {supConstructor(2)} An earlier synagogue occupied the space of what
        became the fore-court and house of assembly of the synagogue as it was
        at the time of Dura’s destruction.{supConstructor(3)} This earlier
        synagogue was adapted from a private house and consisted of a series of
        chambers grouped around a courtyard; there was a diwan, an aedicula to
        house scripture, an assembly room, potentially a room specifically for
        female worshippers, and painted wall and ceiling decorations.
        {supConstructor(4)}
      </p>
      <p>
        &emsp; The entire complex (House H, fore-court, House of Assembly) of
        the later synagogue can only be accessed through the entrance to House
        H.{supConstructor(5)} House H consisted of a diwan and a group of rooms
        that seem to have had a residential function.{supConstructor(6)}{" "}
        Kraeling, in the Final Report, hypothesized that these rooms were used
        as a guest-house for visiting Jewish travelers.{supConstructor(7)} The
        fore-court was probably used as a community space for the instruction of
        children, scholarly discussions, and there was a basin for washing hands
        before entering the House of Assembly for prayer.{supConstructor(8)}
      </p>
      <p>
        &emsp; What makes the synagogue of Dura-Europos unique is that its House
        of Assembly is covered with painted wall-frescoes depicting Biblical
        scenes.{supConstructor(9)} This forced scholars to rethink the previous
        assumption that the second commandment resulted in the absence of any
        “Jewish art.”{supConstructor(10)} In doing so, there has been fierce
        debate about how to interpret the paintings. Some have concluded that
        the Jewish community at Dura-Europos was unorthodox, others have viewed
        the frescoes as a forerunner of Christian art, or as drawing from a
        history of now-lost Hellenistic illustrated manuscripts.
        {supConstructor(11)} There has also been significant debate about how to
        relate the paintings to textual sources or the extent to which they were
        either similar to other art at Dura-Europos or a conscious effort to
        distance the Jewish community from “pagan” norms.{supConstructor(12)}
      </p>
      <p>
        &emsp; In addition to the paintings, the House of Assembly contained an
        aedicula to display scripture and painted ceiling tiles. The ceiling
        tiles were painted with animals, flowers, and astrological symbols.
        {supConstructor(13)} Some were inscribed with the names of founders and
        donors.
        {supConstructor(14)} Other textual evidence demonstrates that the Jewish
        community at Dura-Europos was multilingual: a fragment of a Hebrew
        prayer was found near the synagogue and one or the wall paintings was
        labeled in Hebrew, but most of the inscriptions and graffiti are in
        Aramaic and Greek. There are also some long Persian inscriptions on the
        wall paintings.{supConstructor(15)}
      </p>
      {footerConstructor(1, 15)}
    </div>
  );
};

const atargatisDescription = () => {
  return (
    <div className="text-white">
      <p>
        &emsp; Atargatis is a Syrian goddess who may have been the patron saint
        of Dura-Europos (or the patron saint may have been Nike or Artemis).
        {supConstructor(16)} Based on inscriptions, the Temple of Atargatis was
        first built between 31-92 CE.{supConstructor(17)} Seleucid (312-63 BCE)
        coins found throughout the temple may attest to the fact that the site
        was already important at that time. {supConstructor(18)}
      </p>
      <p>
        &emsp; The temple’s main entrance, on either side of which are two
        little exterior chapels, leads to a room of tiered benches, then the
        naos of the temple, before opening up to a great court which is
        surrounded by more little chambers.{supConstructor(19)} The naos (the
        inner chamber of the temple) contained a pedestal supporting a statue of
        Atargatis and two little rooms for sacred objects.{supConstructor(20)}{" "}
        The great court, constructed of baked brick, contained a main
        sacrificial altar, as well as a basin in the center.{supConstructor(21)}{" "}
        There is evidence that the edifice of the temple was quickly repaired
        with brick and plaster after the earthquake of 160 CE.
        {supConstructor(22)} A staircase led to the roof of the temple.
        {supConstructor(23)}
      </p>
      <p>
        &emsp; It may be that “the cultus statue of Atargatis was brought forth
        from the naos into the [room with tiered benches] and there worshiped
        with dancing and orgiastic rites by the priests to the accompaniment of
        music from the worshipers.”{supConstructor(24)} The temples of Artemis
        and of the Palmyrene Gods at Dura-Europos possess similar plans and may
        therefore have had similar ceremonial rituals.{supConstructor(25)}
      </p>
      <p>
        &emsp; In addition to the great sacrificial altars, the temple also
        contained a smaller altar probably dedicated to the god Hadad - the
        partner of Atargatis - as well as two little altars to the gods Sasados
        and Saddoudan.{supConstructor(26)} Important finds from the Temple of
        Atargatis include a bas-relief of the goddess with Hadad at her side,
        {supConstructor(27)} a cuneiform tablet re-used as a brick that contains
        evidence for an older version of the place name “Dura” (“Da-wa-ra”),
        {supConstructor(28)} a rare inscription at Dura-Europos in Hatrene,
        {supConstructor(29)} and one of only few portrait sculptures found at
        Dura - a life-sized female statue in the room with tiered benches.
        {supConstructor(30)}
      </p>
      {footerConstructor(16, 30)}
    </div>
  );
};

const palmyreneDescription = () => {
  return (
    <div className="text-white">
      <p>
        &emsp; The Palmyrene Gate, known as Bab al-Hawa by locals, is a
        monumental structure on the west of Dura-Europos. The earliest known
        photograph of Dura-Europos was taken in 1885 by John Henry Hayes,
        American Consul to Baghdad, of the Palmyrene Gate.{supConstructor(31)}{" "}
        It was one of the first structures to be excavated in the first season,
        with excavation completed in the second season, and some additional
        finds occurring later.{supConstructor(32)} These initial seasons were,
        as Baird notes, heavily militarized; the Syrian legion excavated the
        gate in spring 1928{supConstructor(33)} and a commander of the Syrian
        legion supervised excavation work on the Palmyrene gate in the 1929
        season.{supConstructor(34)}
      </p>
      <p>
        &emsp; We now know that the Palmyrene gate and other fortifications of
        the city date to the mid-second century BC.{supConstructor(35)} The
        Palmyrene Gate was the primary gate of the western wall.
        {supConstructor(36)} It led to the route along the west bank of the
        Euphrates to northern and western Syria and Palmyra.{supConstructor(37)}{" "}
        However, no clearly defined road between these two cities has been
        established.{supConstructor(38)} Inside the city, the gate leads to the
        main street of Dura-Europos.{supConstructor(39)}
      </p>
      <p>
        &emsp; The gate itself consists of two towers on either side of a
        passageway. The upper stories of the towers are not directly connected
        to the ground floor and only accessible by ladder.{supConstructor(40)}{" "}
        The rooms on the ground floor of the gate were probably only used for
        storage.{supConstructor(41)} This is similar to other parts of
        Dura-Europos’ fortifications, suggesting defense was concentrated in the
        upper stories.{supConstructor(42)} Some of the structure is constructed
        of unbaked bricks and rubble, which the excavators claimed pointed to
        the hasty reconstruction of the gate after an earthquake in 160 CE.
        {supConstructor(43)}
      </p>
      <p>
        &emsp; The city walls north and south of the gate do not perfectly
        align; von Gerkan hypothesized that the first gate at the site therefore
        incorporated a tight, bended passage to create a further obstacle for an
        enemy entering the city.{supConstructor(44)} Inside the passageway of
        the gate, there are three doors getting increasingly broader as one
        enters the city.{supConstructor(45)} There may have been a small
        sanctuary to the Fortune (Tyche) of Dura within the gate, as evidenced
        by a number of inscriptions and some roadside altars.
        {supConstructor(46)}
      </p>
      <p>
        &emsp; It was already evident in the first season of excavations that
        the gate was particularly rich with inscriptions.{supConstructor(47)}{" "}
        The inscriptions point to the cultural diversity of Dura-Europos’
        inhabitants. While most are in Greek, there are also inscriptions in
        Latin, Palmyrene, and Safaitic (Arabic in non-Arabic script).
        {supConstructor(48)} One inscription with the name of the goddess
        Nemesis (for whom there is also a bas-relief at the gate) was the first
        such inscription found in a “Semitic” context at the time of excavation.
        {supConstructor(49)} The plethora of inscriptions - many of which simply
        contain names - has allowed Johnson to reconstruct the family trees of
        some Durene families.{supConstructor(50)} The many names of military
        personnel inscribed into the gate also point to a significant military
        presence.{supConstructor(51)}
      </p>
      <p>
        &emsp; Other finds from the Palmyrene gate and its immediate vicinity
        include a bronze swastika,{supConstructor(52)} a hoard of 818 coins and
        assorted jewelry,{supConstructor(53)} two laurel or olive crowns,
        {supConstructor(54)} two panels of painted wood,{supConstructor(55)} a
        basalt mill,{supConstructor(56)} textiles and leather from soldiers’
        boots,{supConstructor(57)} and a loan document recorded on parchment.
        {supConstructor(58)}
      </p>
      {footerConstructor(31, 58)}
    </div>
  );
};

const mithraeumDescription = () => {
  return (
    <div className="text-white">
      <p>
        &emsp; The Mithraeum is located in the northwestern part of Dura-Europos
        in block J7, next to a city gate.{supConstructor(59)} Unlike Mithraea in
        other parts of the Roman empire, the one in Dura-Europos is unique as it
        is above and not below ground.{supConstructor(60)} It is one of the most
        “complete” Mithraea and contains reliefs, frescoes, architecture
        preserved to ceiling height, and over two hundred graffiti and dipinti.
        Like the synagogue, this material was preserved by the embankment built
        over it to buttress the city wall against attack.{supConstructor(61)}
      </p>
      <p>
        &emsp; Scholars disagree on the evolution of the Mithraeum. The earliest
        dated inscriptions in the building are preserved in the two paintings of
        Mithras slaying the bull. One is dated to 168 CE and one to 171/2 CE.
        {supConstructor(62)} Early scholars such as Cumont, and later ones such
        as Gnoli, date the “first phase” of the Mithraeum to those dedication
        dates, with a second phase during which the building was restored during
        the period of the Severan dynasty (r. 193-235) and a third phase lasting
        until it was buried beneath the embankment in 256 CE.
        {supConstructor(63)} Gnoli argues that in this second phase, the
        Mithraeum substantially increased in size, corresponding to an
        intensified Roman presence at Dura-Europos.{supConstructor(64)} However,
        Dirven and McCarty dispute this and note that the Mithraeum structure at
        the time of Dura’s destruction aligned well with older foundations;
        therefore, the original Mithraeum was not simply inserted into part of a
        private residence.{supConstructor(65)} They argue that there are two
        distinct structural phases of the Mithraeum.{supConstructor(66)}
      </p>
      <p>
        &emsp; It is clear that the Mithraeum had a strong association with the
        Roman military; inscriptions demonstrate that many of the worshippers
        were members of the twentieth Palmyrene cohort.{supConstructor(67)}{" "}
        Additionally, the floor of the Mithraeum is laid with bricks fired
        according to the standards of the Roman military.{supConstructor(68)}{" "}
        However, it is unclear how the Mithraic community at Dura-Europos
        originated, given no cult of Mithras is attested at Palmyra and the
        style of the paintings in the Mithraeum share features with other local
        Durene art.{supConstructor(69)}
      </p>
      <p>
        &emsp; The inside of the Mithraeum is decorated with two scenes of
        Mithras slaying the bull (tauroctony) and thirteen scenes of Mithras’
        life and cosmological events, including vivid hunting scenes.
        {supConstructor(70)} Under the arched niche, there was a further
        tauroctony and depictions of the twelve signs of the zodiac.
        {supConstructor(71)} The walls are lined with benches for the members of
        the cult.{supConstructor(72)} There has been much debate about the
        extent to which these paintings deviated (or did not) from “orthodoxy”
        and practices in other parts of the Roman Empire. For example, Gnoli
        argues that the Mithraeum at Dura shows its Iranian origin.
        {supConstructor(73)} Cumont and Rostovtzeff posited an original
        “eastern” context for the Mithraeum being updated over time to fit
        Western “orthodoxy.”{supConstructor(74)} Dirven and McCarty, however,
        argue that two layers of paintings at the Mithraeum suggest continuity
        rather than change and that it is difficult to detect significant
        departures from an “orthodoxy” which is poorly defined.
        {supConstructor(75)}
      </p>
      {footerConstructor(59, 75)}
    </div>
  );
};

const christianDescription = () => {
  return (
    <div className="text-white">
      <p>
        &emsp; When the Christian building was discovered, it quickly became a
        massive interest for scholars as the oldest in-situ Christian building
        discovered, and was a key motivation for the continued funding of the
        archeological mission.{supConstructor(76)}
      </p>
      <p>
        &emsp; Like the synagogue, the Christian building was a worship space
        adapted to fit a private residence.{supConstructor(77)} Also like the
        Mithraeum and the synagogue, the Christian building was sealed beneath
        an embankment used to reinforce the city walls against attack in the
        last years of Dura’s existence.{supConstructor(78)} A graffito attests
        to the fact that the building was in use by at least 232/3 AD, but there
        is no certainty over the dating of the original private home or when it
        was converted to a Christian building.{supConstructor(79)}
      </p>
      <p>
        &emsp; The Christian building was accessed by a doorway, after which a
        vestibule led to a central courtyard laid with tiles.
        {supConstructor(80)} This courtyard was surrounded by rooms on three
        sides and by a portico on the fourth side.{supConstructor(81)} The
        largest of these rooms (“Room 4”) has a small raised platform at one end
        and is therefore thought to be the assembly hall for the community. It
        is abutted by a small room (“Room 3”) which had no other access and may
        have been used for storage.{supConstructor(82)} Room 5, the second
        largest room, adjoined Room 4. On the other side of Room 5 from Room 4
        was the Baptistery. This contained a basin used for baptisms, covered by
        a canopy. The walls of the Baptistery were covered in paintings of
        Biblical scenes and the canopy and ceiling were painted with decorative
        designs.{supConstructor(83)}
      </p>
      <p>
        &emsp; Like the paintings in the synagogue, these paintings have been
        the subject of fierce scholarly debate regarding their proper
        interpretation. Recently, Peppard has influentially argued that the
        community of Christian building possessed a uniquely “Syrian” approach
        to initiation rituals like baptism. The paintings alongside the upper
        parts of the baptistery walls and those alongside the lower parts serve
        distinctly different purposes in the initiation ritual.
        {supConstructor(84)} He also tries to shift the emphasis of the Syrian
        Christian initiation ritual from baptism by water to anointing by oil
        and argues that the painting of three veiled women (often interpreted as
        women at Jesus’ tomb or at the well) should be read as the Parable of
        the Wise and Foolish Brides of Christ.{supConstructor(85)} Harrower
        provides a critique, arguing that Peppar is wrong to wrong to
        problematize the relationship between the paintings and textual sources,
        when canonical New Testament sources provide a good explanation of the
        paintings.{supConstructor(86)}
      </p>
      <p>
        &emsp; A parchment of what may be Tatian’s Diatesseron, a gospel
        harmony, was found in the area of the Christian building. This may point
        to a specific doctrine practiced by the Christian community at
        Dura-Europos, and graffiti with Syriac spellings imply access to Syriac
        Christian texts.{supConstructor(87)}
      </p>
      {footerConstructor(76, 87)}
    </div>
  );
};

const DescriptionDiv = ({ location }: Props) => {
  switch (location) {
    case "Synagogue":
      return synagogueDescription();
      break;
    case "Temple of Atargatis":
      return atargatisDescription();
      break;
    case "Palmyrene Gate":
      return palmyreneDescription();
      break;
    case "Mithraeum":
      return mithraeumDescription();
      break;
    case "Christian Building":
      return christianDescription();
      break;
    default:
      return <div>No description found.</div>;
  }
};

export default DescriptionDiv;
