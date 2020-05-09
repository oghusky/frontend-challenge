# Frontend Challenge

These tests will be used to evaluate your skillset and the type of tasks/projects you'd be great for. We encourage you to do both tests. They are different in nature and evaluate different skills. Start with one that better demonstrates your craft.

**Important**: Read all of the instructions and information below before beginning.

## Task

1. You have up to 48 hours to complete these tests, starting from the time you've been given access to this repo.

2. Fork this repo. As you work on the tests, commit all your work to that forked repo, but more importantly page your commits. The main aspect we want to gauge is your process, how you approach a problem and the way you think.

---

**Slider**:

1. Please implement the UI shown in the video reference `slider/example.mp4`.

2. Motion should be elegant. The interaction should be light, tight, and smooth.

3. Consider responsiveness.

4. Consider modularity.

5. Use any code library or framework you like except:

* Jquery
* Framer and other design prototyping tools

**Puzzle**:

1. If you're unfamiliar with the 15 Puzzle, [read up on it](https://en.wikipedia.org/wiki/15_puzzle) and make sure you have a good understanding of what it is. This test adapts that puzzle to an 8-tile variant.

2. No markup changes are allowed inside the body tag in the `puzzle/index.html` file.

3. Do not use any front end libraries or frameworks for any of the tasks except when explicitly noted.

4. Make the puzzle work with the same interaction model as the original puzzle had.

   * The application logic cannot be in global scope.
   * Write comments throughout your application structure and logic. The degree of commenting that you do is up to you, but more importantly we want to be able to "read through" your thought process.

5. Style the puzzle to look *exactly* like the screenshot: `puzzle/example.png`.

   * Any valid CSS is permitted.
   * Across browsers, the puzzle should look the same or *very* close to the same.
   * The mobile screenshot demonstrates the initial scale of the page.
   * The user should be able to zoom the page and styling should not break.

6. Cannot create a "blank" tile to fill the empty space in the puzzle.

### Extra points

The items outlined so far are what we would consider the minimum set of requirements. It's okay if there are items that you cannot complete for some reason, but please let us know why. Additionally completing some of the Extra Point items can compensate for items not completed in the initial set.

* Use Sass or SCSS, and optionally a CSS post-processor such as [PostCSS](https://github.com/postcss/postcss). No frameworks such Bourbon, Neutron, Compass, or otherwise are allowed; we want to see *your* CSS.
* Use ES6/ES2015 or Typescript transpiled to ES5. If you decide to do this, please include and comment on your build process.
* Make the same puzzle work for 15 tiles using the same application logic.
* Expose a way to shuffle or disorder the tiles via the console. This is the only part of the application logic that is allowed to be exposed globally, but the shuffle functionality should remain unexposed and integrated into the rest of the application logic.
* Use linters like [eslint](https://github.com/eslint/eslint) and [stylelint](https://github.com/stylelint/stylelint) and formatters like [prettier](https://github.com/prettier/prettier) to enforce a consistent coding style scross both tests.'
* Use commit tools like [commitizen](https://github.com/commitizen/cz-cli) and [commitlint](https://github.com/conventional-changelog/commitlint) to ensure commit messages follow a standard format and style. The [Udacity Git Commit Message Style Guide](https://udacity.github.io/git-styleguide/) may provide some inspiration.
* Add git hooks through tools like [husky](https://github.com/typicode/husky) to ensure any tests or scripts needed to validate your code are run before being pushed.

## Deliverable

1. A link to the forked repo emailed to us as soon as you start the test.

2. A commit modifying the `README` around the same time frame as the email mentioned above. The change can be anything. Similarly, it should mark the beginning of your work on the quiz.

3. An email notifying somebody from our team that you have completed your work.
