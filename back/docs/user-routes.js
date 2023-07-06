/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - nickname
 *         - lastname
 *         - address
 *         - zip_code
 *         - city
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *         nickname:
 *           type: string
 *         lastname:
 *           type: string
 *         address:
 *           type: string
 *         zip_code:
 *           type: integer
 *         city:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *       example:
 *         name: John
 *         nickname: john123
 *         lastname: Doe
 *         address: 123 Main St
 *         zip_code: 12345
 *         city: New York
 *         email: john.doe@example.com
 *         password: password123
 */
