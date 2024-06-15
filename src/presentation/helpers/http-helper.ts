import {
  ForbiddenException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';

export const ok = (data: any, res: Response): Response =>
  res.status(200).json(data);

export const created = (data: any, res: Response): Response =>
  res.status(201).json(data);

export const noContent = (res: Response): Response => res.status(204).send();

export const unauthorized = (error: Error, res: Response): Response =>
  res.status(401).json(new UnauthorizedException(error));

export const forbidden = (error: Error, res: Response): Response =>
  res.status(403).json(new ForbiddenException(error));

export const serverError = (error: Error, res: Response): Response =>
  res.status(500).json(new InternalServerErrorException(error));
