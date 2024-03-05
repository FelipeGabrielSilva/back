import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from './../../prismaService';

@Injectable()
export class PessoaService {
  constructor(private prisma: PrismaService) { }

  create(createPessoaDto: CreatePessoaDto) {
    return this.prisma.pessoa.create({
      data: createPessoaDto,
    })
  }

  findAll() {
    return this.prisma.pessoa.findMany();
  }

  findOne(id: number) {
    return this.prisma.pessoa.findUnique({
      where: {
        pessoaID: id,
      }
    })
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return this.prisma.pessoa.update({
      data: updatePessoaDto,
      where: {
        pessoaID: id,
      }
    })
  }

  remove(id: number) {
    return this.prisma.pessoa.delete({
      where: {
        pessoaID: id,
      }
    })
  }
}
