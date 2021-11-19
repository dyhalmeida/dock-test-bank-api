class HomeController {
  async index(_, response) {
    return response.json({
      message: 'Dock test bank API 🚀',
      description: 'API for bank transaction control',
      author: {
        name: 'Diego Almeida',
        contact: {
          phone: '+55 71 98221-2621',
          whatsapp: '+55 71 98221-2621',
          email: 'dyhalmeida@gmail.com',
          github: 'https://github.com/dyhalmeida',
          linkedin: 'https://www.linkedin.com/in/dyhalmeida/',
        },
      },
    });
  }
}

module.exports = new HomeController();
