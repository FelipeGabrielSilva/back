import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { PrismaService } from 'src/prismaService';

@Module({
  controllers: [PessoaController],
  providers: [PessoaService, PrismaService],
})
export class PessoaModule {}
