import React, { useEffect } from 'react';
import Realm from 'realm';
import { ThomasSchema } from './Models'

export const realm = new Realm({ schema: [ThomasSchema] });