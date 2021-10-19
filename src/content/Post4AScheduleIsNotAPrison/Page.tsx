import ImageAuthor from "../../components/elements/ImageAuthor"
import Stack from "../../components/elements/Stack"
import data from "."

const Page = () => {
  return (
    <Stack
      gap={`1rem`}
      data-aos={`fade`}
      css={`
        padding-top: 1rem;
      `}
    >
      <blockquote>
        <q>
          Specify your damn goals because how are you going to hit something if
          you don’t know what it is? That isn’t going to happen. And often
          people won’t specify their goals too because they don’t like to
          specify conditions for failure. So if you keep yourself all vague and
          foggy, which is real easy, because that’s just a matter of not doing
          as well, then you don’t know when you fail. And people might say,
          “Well I really don’t want to know when I fail because that’s painful,
          so I’ll keep myself blind about when I fail”. That’s fine except
          you’ll fail all the time then. You just won’t know it until you fail
          so badly that you’re done. And that can easily happen by the time
          you’re forty.
        </q>
      </blockquote>

      <p>If that didn’t wake you up, I don’t know what will.</p>

      <p>
        This post was rather hard to write in a way because almost every
        sentence that Jordan Peterson said in this lecture deserves its own
        post. His views on human psychology and society may be rather
        controversial to some. However, if you were to go a little deeper into
        his rationale, they would start to appear quite dangerously logical,
        even if some ideas aren’t entirely practical today. Regardless on
        whether I agree or disagree with some of his viewpoints, Jordan Peterson
        has inspired me to think differently from before, for the better.
      </p>

      <p>
        The original words of today’s quote were a little harsher and more
        direct in his lecture, so I changed the wording just slightly to capture
        the essence of what he was saying in a more subtle manner,
      </p>

      <blockquote data-aos={`fade-right`}>
        <q>{data.quote}</q>
      </blockquote>

      <p>
        People often start by creating schedules that are often difficult,
        unrealistic or perhaps impossible to achieve. Schedules are meant to
        work for us, not against us. If we only added boring and repetitive
        tasks in, it is no wonder we find our schedules boring and repetitive.
        Instead of planning our path to success, we might have only set up
        ourselves for failure from day one.
      </p>

      <p>
        Guilt and the feeling of hopelessness are two huge enemies of
        motivation, and a way to avoid that is by building small wins throughout
        your entire journey. If you’ve never been able to sit down and study for
        more than twenty minutes, scheduling 5 hours of study a day isn’t going
        to work. Try adding a few minutes a day, and if you continuously achieve
        that its going to loop back positively and spiral you upwards.
      </p>

      <p>
        You are not your own servant. You have to negotiate with yourself to
        find the right amount of productivity while also have a good life, a
        life that you’d like to have. There has to be a balance between
        responsibilities, obligation and doing what you enjoy. With the right
        ratio between them, doing what you enjoy might feel even better than
        before since would be compounded with a sense of reward and
        satisfaction.
      </p>

      <a
        href={`https://youtu.be/bCMkhCV2HWE`}
        target={`_blank`}
        rel={`noreferrer`}
      >
        🔗&nbsp;&nbsp;MAKE A DAMN SCHEDULE - Powerful Motivational Video |
        Jordan Peterson
      </a>

      <ImageAuthor
        image={data.image}
        authorName={`Daria Shevtsova`}
        authorLink={`https://www.pexels.com/@daria`}
        imageLink={`https://www.pexels.com/photo/macbook-air-beside-notebook-and-camera-916335/`}
      />
    </Stack>
  )
}

export default Page
