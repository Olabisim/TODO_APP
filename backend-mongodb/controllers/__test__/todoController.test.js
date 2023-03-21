import request from 'supertest'
import app from '../../app'

// create todo
it("returns a 201 response after creating a todo", async () => {
        return await request(app)
                .post('/todos')
                .send({
                        title: "some title",
                        completed: "true"
                })
                .expect(201)
} )

// retrieve all todos
it("returns a 201 response after creating a todo", async () => {
        return await request(app)
                .get('/todos')
                .expect(200)
} )

// update all todos
it("returns a 200 after updating a todo", async () => {
        return await request(app)
                .patch('/todos/641a1ad1fb77c2eef3875e6c')
                .send({
                        id: "641a1ad1fb77c2eef3875e6c",
                        title: "some title",
                        completed: false
                })
                .expect(200)
})

// delete a todos
it("returns a 200 after deleting a todo", async () => {
        return await request(app)
                .delete('/todos/641a1ad1fb77c2eef3875e6c')
                .send({
                        id: "641a1ad1fb77c2eef3875e6c",
                        title: "some title",
                        completed: false
                })
                .expect(200)
})