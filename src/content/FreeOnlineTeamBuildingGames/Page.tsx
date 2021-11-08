import PageContainer from "../../components/elements/PageContainer"
import amongus from "./images/amongus.jpg"
import codenames from "./images/codenames.jpg"
import gartic from "./images/gartic.jpg"
import geoguessr from "./images/geoguessr.png"
import scattergories from "./images/scattergories.jpg"

const Page = () => (
  <PageContainer>
    <p>
      Lockdowns are over, well mostly anyway. Though online games are no longer
      our only source of entertainment anymore, it's still a great way to have
      fun and bond with people around the world. Remote work has become the norm
      in many workplaces now, and it's a great way to catch up with friends in
      different countries.
    </p>
    <p>
      I've narrowed down the games that I've tried over the past year or so and
      here are all the ones that I had a lot of fun playing that also have
      high-quality presentation and UI.
    </p>
    <br />
    <h3>1. Among Us</h3>
    <p>
      One of the most popular games during the pandemic last year, I'd be
      surprised if anyone haven't at least heard of it. Among us has similar
      elements to the social deduction card game Mafia/Werewolf but brings it to
      a whole new level in terms of interactivity since you play it on an app
      instead of with physical cards.
    </p>
    <p>
      There are two roles in the game. Crewmates work together to complete all
      the tasks on the map, while imposters try to kill all the crewmates
      without revealing their true identities.
    </p>
    <p>
      Even though Among Us isn't as popular as it was during the lockdown, it's
      still a fantastic game that's easy to pick up with great replay value.
    </p>
    <img src={amongus} />
    <a
      href={`https://www.innersloth.com/games/among-us/`}
      rel={`noreferrer`}
      target={`_blank`}
    >
      🔗&nbsp;&nbsp;Link to Among Us
    </a>
    <br />
    <h3>2. Codenames</h3>
    <p>
      Probably in the arsenal of every boardgames lover, this game is really
      easy to recommend both in its physical and online versions. Two teams
      compete by each having a "spymaster" give one-word clues that can point to
      multiple words on the board for his/her team to guess, while avoiding the
      words of the other team.
    </p>
    <p>
      What's great is that it can be both fun and educational at the same time.
      You might learn a new word or two along the way, but I think the real
      value is learning how your friends or colleagues think and what they
      associate with.
    </p>
    <p>
      If you love this game and would like to try something similar, I would
      recommend giving Decrypto a go.
    </p>
    <img src={codenames} />
    <a href={`https://codenames.game/`} rel={`noreferrer`} target={`_blank`}>
      🔗&nbsp;&nbsp;Link to Codenames
    </a>
    <br />
    <h3>3. Gartic.io</h3>
    <p>
      A light fun online version of Pictionary. Works great for larger groups
      and younger kids too. There are many alternatives but I found this site to
      have an overall better UI and many more categories to choose from. If that
      is not enough, you can save a custom list of words in your account too.
    </p>
    <p>Similar alternatives:</p>
    <ul>
      <li>https://skribbl.io/</li>
      <li>https://sketchful.io/</li>
    </ul>
    <img src={gartic} />
    <a href={`https://gartic.io/`} rel={`noreferrer`} target={`_blank`}>
      🔗&nbsp;&nbsp;Link to Gartic.io
    </a>
    <br />
    <h3>4. GeoGuessr</h3>
    <p>
      If you like travelling, this is the game for you. Even though this game
      can get extremely challenging for the geographically impaired like me, it
      is still fun to explore and learn new places as you go.
    </p>
    <p>
      There are free games to play on GeoGuessr, but most of the good ones
      require a subscription. There is a free trial and it's only $3 a month
      after that which doesn't break the bank. If anything, learning about new
      places might inspire you to plan your next travel adventure, and that will
      definitely cost a little more.
    </p>
    <img src={geoguessr} />
    <a href={`https://www.geoguessr.com/`} rel={`noreferrer`} target={`_blank`}>
      🔗&nbsp;&nbsp;Link to GeoGuessr
    </a>
    <br />
    <h3>5. Really Boring Website</h3>
    <p>
      Contrary to its name, this site might actually fix your boredom instead.
      If you're familiar with Scattergories you'd be able to just right into it
      without an introduction.
    </p>
    <p>
      Rules of the game: You are given a letter and 12 categories each round.
      Answer each category with a word starting with that letter, and the
      validity of your answers are voted on at the end of each round.
    </p>
    <p>
      Being just a word game, you'd be surprised how fast paced this game can
      get. And between all the games on this list, I would think that you'd get
      the biggest laughs from this one.
    </p>
    <img src={scattergories} />
    <a
      href={`https://really.boring.website/`}
      rel={`noreferrer`}
      target={`_blank`}
    >
      🔗&nbsp;&nbsp;Link to Really Boring Website
    </a>
    <br />
    <p>
      Playing games together with the people you know and care about is a great
      way to reduce stress and have a good laugh together. It has long lasting
      effects on teamwork and collaboration even after the game is over and
      you've all gone back to your routines and work life. On top of that, no
      matter how simple or complex these games are, they can give you enjoyable
      learning experiences and increase creativity along the way.
    </p>
  </PageContainer>
)

export default Page
