import ImageAuthor from "../../components/elements/ImageAuthor"
import PageContainer from "../../components/elements/PageContainer"
import ExternalLink from "../../components/molecules/ExternalLink"
import data from "."

const Page = () => (
  <PageContainer>
    <h4>Quick Reference Guide:</h4>
    <p>Expression</p>
    <ul>
      <li>When I see/hear ...</li>
      <li>I feel ...</li>
      <li>Because I need ...</li>
      <li>Would you be willing to ... ?</li>
    </ul>
    <p>Empathy</p>
    <ul>
      <li>When you see/hear ...</li>
      <li>Are you feeling ...</li>
      <li>Because you need ...</li>
      <li>Would you like ... ?</li>
    </ul>
    <p>
      <b>Observations:</b> Description of what is seen or heard without added
      interpretations. For example, instead of "She's having a temper tantrum,"
      you could say "She is lying on the floor crying and kicking." If referring
      to what someone said quote as much as possible instead of rephrasing.
    </p>
    <p>
      <b>Feelings:</b> Our emotions rather than our story or thoughts about what
      others are doing. For example, instead of "I feel manipulated," which
      includes an interpretation of another's behavior, you could say "I feel
      uncomfortable." Avoid the following phrasing: "I feel like . . . " and "I
      feel that…" — the next words will be thoughts, not feelings.
    </p>
    <p>
      <b>Needs:</b> Feelings are caused by needs, which are universal and
      ongoing and not dependent on the actions of particular individuals. State
      your need rather than the other person's actions as the cause. For
      example, "I feel annoyed because I need support" rather than "I feel
      annoyed because you didn't do the dishes."
    </p>
    <p>
      <b>Requests:</b> Asking concretely and clearly for what we want (instead
      of what we don't want). For example, "Would you be willing to come back
      tonight at the time we've agreed?" rather than "Would you make sure not to
      be late again?" By definition, when we make requests we are open to
      hearing a "no," taking it as an opportunity for further dialogue.
    </p>
    <p>
      <b>Empathy:</b> In NVC, we empathize with others by guessing their
      feelings and needs. Instead of trying to "get it right," we aim to
      understand. The observation and request are sometimes dropped. When words
      are not wanted or are hard to offer, empathy can be offered silently.
    </p>
    <p>
      <b>Self-Empathy:</b> In self-empathy, we listen inwardly to connect with
      our own feelings and needs. It is that connection which enables us to
      choose our next step.
    </p>
    <ExternalLink
      href={`https://baynvc.org/nonviolent-communication-quick-reference-guide/`}
    >
      https://baynvc.org/nonviolent-communication-quick-reference-guide/
    </ExternalLink>
    <br />
    <ImageAuthor {...data} />
  </PageContainer>
)

export default Page
