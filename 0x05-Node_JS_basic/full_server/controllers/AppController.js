/**
 * Contains the miscellaneous route handlers.
 * @author Babatunde Ibrahim <https://github.com/ibbabs>
 */
class AppController {
  static getHomepage(_, response) {
    response.status(200).send("Hello Holberton School!");
  }
}

export default AppController;
module.exports = AppController;
