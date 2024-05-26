import { describe, it } from 'vitest'
import { RegisterUseCase } from './register.js'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository.js'

describe('register use case', () => {
  it('should hash user password upon registration', async () => {
    const prismUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismUsersRepository)

    const { user } = await registerUseCase.execute({
      name: 'Roni Lucas',
      email: 'pontes014@gmail.com',
      password: '123456',
    })

    console.log(user.password_hash)
  })
})
